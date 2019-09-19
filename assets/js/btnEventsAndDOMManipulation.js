//* Get start div and elements
const startScreen = { div: document.getElementById("startDiv"), startBtn: document.getElementById("startBtn") };
//* Get level div and elements
const levelScreen = {
  div: document.getElementById("levelDiv"),
  withGridBtn: document.getElementById("startGridOnBtn"),
  withoutGridBtn: document.getElementById("startGridOffBtn"),
  levelH1: document.getElementById("levelNumber"),
  gridSize: document.getElementById("gridSize"),
  difficulty: document.getElementById("levelDifficulty"),
  timeBonus: document.getElementById("timeBonus"),
  gridBonus: document.getElementById("gridBonus")
};
//* Get level done div and elements
const levelDoneScreen = {
  div: document.getElementById("levelDoneDiv"),
  levelDoneH1: document.getElementById("levelDoneNumber"),
  levelTimeSpendH1: document.getElementById("levelTimeSpend"),
  difficultyPoints: document.getElementById("difficultyPoints"),
  timePoints: document.getElementById("timePoints"),
  gridPoints: document.getElementById("gridPoints"),
  totalLevelPoints: document.getElementById("totalLevelPoints"),
  nextBtn: document.getElementById("nextLevelBtn")
};
//* Get final div and elements
const finalScreen = {
  div: document.getElementById("finalDiv"),
  gameDone: document.getElementById("gameDone"),
  gameDoneH2: document.getElementById("gameDoneH2"),
  gameTimeSpend: document.getElementById("gameTimeSpend"),
  totalGamePoints: document.getElementById("totalGamePoints"),
  backToStart: document.getElementById("backToStart")
};

//* Start level div configuration
//* Get start button and set event click
const newLevelEvent = e => {
  //* Start game instance and level instance
  if (!gameControl.currentLevel) {
    gameControl = new GameControl(ctx, "", levelsPredefined);
    gameControl.cleanCanvas();
    gameControl.startLevel(gameControl.currentLevel + 1);
  }
  startDiv.classList.add("hide");
  levelDiv.classList.remove("hide");
  levelDoneScreen.div.classList.add("hide");
  finalScreen.div.classList.add("hide");
  // canvas.classList.add("hide");
  //* Set screen values
  levelScreen.gridSize.innerText = `${gameControl.levelInstance.gridSize} x ${gameControl.levelInstance.gridSize}`;
  levelScreen.difficulty.innerText = `${gameControl.levelInstance.levelDifficulty}`;
  const listTimeBonus1 = document.createElement("li");
  const listTimeBonus2 = document.createElement("li");
  listTimeBonus1.innerText = `< ${(gameControl.levelInstance.points.time[0].time / 1000).toFixed(1)}s: ${
    gameControl.levelInstance.points.time[0].points
  } pts`;
  levelScreen.timeBonus.innerHTML = "";
  levelScreen.timeBonus.appendChild(listTimeBonus1);
  listTimeBonus2.innerText = `< ${(gameControl.levelInstance.points.time[1].time / 1000).toFixed(1)}s: ${
    gameControl.levelInstance.points.time[1].points
  } pts`;
  levelScreen.timeBonus.appendChild(listTimeBonus2);
  const listGridBonus1 = document.createElement("li");
  const listGridBonus2 = document.createElement("li");
  levelScreen.gridBonus.innerHTML = "";
  listGridBonus1.innerText = `On: ${gameControl.levelInstance.points.gridOn}%`;
  levelScreen.gridBonus.appendChild(listGridBonus1);
  listGridBonus2.innerText = `Off: +${gameControl.levelInstance.points.gridOff}%`;
  levelScreen.gridBonus.appendChild(listGridBonus2);
  levelScreen.levelH1.innerText = `level ${gameControl.currentLevel + 1}`;
};
startScreen.startBtn.addEventListener("click", newLevelEvent);
//* Set event click with grid on
levelScreen.withGridBtn.addEventListener("click", e => {
  startDiv.classList.add("hide");
  canvas.classList.remove("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.add("hide");
  finalScreen.div.classList.add("hide");
  gameControl.drawGridMode = true;
  gameControl.draw();
});
//* Set event click with grid off
levelScreen.withoutGridBtn.addEventListener("click", e => {
  startDiv.classList.add("hide");
  canvas.classList.remove("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.add("hide");
  finalScreen.div.classList.add("hide");
  gameControl.drawGridMode = false;
  gameControl.draw();
});
//* End level div configuration
//* Start game done div configuration
const gameCompleted = win => {
  //* End game
  startDiv.classList.add("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.add("hide");
  finalScreen.div.classList.remove("hide");
  canvas.classList.add("hide");
  if (win) {
    finalScreen.gameDone.innerText = "Very Good!";
    finalScreen.gameDoneH2.innerText = "You finished all levels!";
  } else {
    finalScreen.gameDone.innerText = "Opsss!";
    finalScreen.gameDoneH2.innerText = "Sorry but you fail.";
  }
  finalScreen.gameTimeSpend.innerText = `Total time playing: ${(
    gameControl.levelsHistory.reduce((acc, level) => acc + level.timeSpended, 0) / 1000
  ).toFixed(1)}s`;
  finalScreen.totalGamePoints.innerText = gameControl.levelsHistory.reduce((acc, level) => acc + level.points.total, 0);
};
finalScreen.backToStart.addEventListener("click", () => {
  gameControl = {};
  startDiv.classList.remove("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.add("hide");
  finalScreen.div.classList.add("hide");
  canvas.classList.add("hide");
});

//* Start level done div configuration
//* Get start button and set event click
const levelDoneEvent = e => {
  //* Start game instance and level instance
  gameControl.cleanCanvas();
  startDiv.classList.add("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.remove("hide");
  finalScreen.div.classList.add("hide");
  canvas.classList.add("hide");
  //* Set screen values

  levelDoneScreen.difficultyPoints.innerText = `+${gameControl.levelsHistory[gameControl.currentLevel].points.difficulty}`;
  const timeBonus = gameControl.levelsHistory[gameControl.currentLevel].points.time;
  levelDoneScreen.timePoints.innerText = `${timeBonus > 0 ? "+" : ""}${timeBonus}`;
  if (timeBonus === 0) {
    levelDoneScreen.timePoints.parentElement.classList.add("red");
  } else {
    levelDoneScreen.timePoints.parentElement.classList.remove("red");
  }
  const gridBonus = gameControl.levelsHistory[gameControl.currentLevel].points.gridBonus;
  levelDoneScreen.gridPoints.innerText = `${gridBonus > 0 ? "+" : ""}${gridBonus}%`;
  if (gridBonus < 0) {
    levelDoneScreen.gridPoints.parentElement.classList.add("red");
  } else {
    levelDoneScreen.gridPoints.parentElement.classList.remove("red");
  }
  levelDoneScreen.levelDoneH1.innerText = `Level ${gameControl.currentLevel + 1} Done!`;
  levelDoneScreen.totalLevelPoints.innerText = `+${gameControl.levelsHistory[gameControl.currentLevel].points.total}`;
  levelDoneScreen.levelTimeSpendH1.innerText = `Completed in: ${(gameControl.levelsHistory[gameControl.currentLevel].timeSpended / 1000).toFixed(
    1
  )}s`;
};
levelDoneScreen.nextBtn.addEventListener("click", () => {
  if (gameControl.currentLevel < gameControl.levels.length) {
    newLevelEvent();
  } else {
    gameCompleted(true);
  }
});
