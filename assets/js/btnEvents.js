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
const finalDiv = document.getElementById("finalDiv");

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
  finalDiv.classList.add("hide");
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
  finalDiv.classList.add("hide");
  gameControl.drawGridMode = true;
  gameControl.draw();
});
//* Set event click with grid off
levelScreen.withoutGridBtn.addEventListener("click", e => {
  startDiv.classList.add("hide");
  canvas.classList.remove("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.add("hide");
  finalDiv.classList.add("hide");
  gameControl.drawGridMode = false;
  gameControl.draw();
});
//* End level div configuration

//* Start level done div configuration
//* Get start button and set event click
const levelDoneEvent = e => {
  //* Start game instance and level instance
  gameControl.cleanCanvas();
  startDiv.classList.add("hide");
  levelDiv.classList.add("hide");
  levelDoneScreen.div.classList.remove("hide");
  finalDiv.classList.add("hide");
  canvas.classList.add("hide");
  //* Set screen values
  levelDoneScreen.difficultyPoints.innerText = `+${gameControl.levelsHistory[gameControl.currentLevel - 1].points.difficulty}`;
  const timeBonus = gameControl.levelsHistory[gameControl.currentLevel - 1].points.time;
  levelDoneScreen.timePoints.innerText = `${timeBonus > 0 ? "+" : ""}${timeBonus}`;
  if (timeBonus === 0) {
    levelDoneScreen.timePoints.parentElement.classList.add("red");
  } else {
    levelDoneScreen.timePoints.parentElement.classList.remove("red");
  }
  const gridBonus = gameControl.levelsHistory[gameControl.currentLevel - 1].points.gridBonus;
  levelDoneScreen.gridPoints.innerText = `${gridBonus > 0 ? "+" : ""}${gridBonus}%`;
  if (gridBonus < 0) {
    levelDoneScreen.gridPoints.parentElement.classList.add("red");
  } else {
    levelDoneScreen.gridPoints.parentElement.classList.remove("red");
  }
  levelDoneScreen.levelDoneH1.innerText = `Level ${gameControl.currentLevel} Done!`;
  levelDoneScreen.totalLevelPoints.innerText = `+${gameControl.levelsHistory[gameControl.currentLevel - 1].points.total}`;
  levelDoneScreen.levelTimeSpendH1.innerText = `Completed in: ${(gameControl.levelsHistory[gameControl.currentLevel - 1].timeSpended / 1000).toFixed(
    1
  )}s`;
};
levelDoneScreen.nextBtn.addEventListener("click", newLevelEvent);
