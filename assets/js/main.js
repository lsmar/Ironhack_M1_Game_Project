// //* Sizes units
var wUnit = 0,
  hUnit = 0;

//* Get canvas element
let gridSize = 5;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var gameControl = {};

//* Mouse click event
canvas.addEventListener("mouseup", e => {
  if (gameControl.start.isMouseHere(e.clientX, e.clientY)) {
    gameControl.startMouse(e);
  }
});
//* Mouse move event
canvas.addEventListener("mousemove", e => {
  //* call gameControl and pass de event
  if (gameControl.gameIsRunning) {
    //* Game is running check if moviment is in the game area
    if (gameControl.insideGameArea(e)) {
      gameControl.mouseMove(e);
    } else {
      //* Sorry you lost the game becouse you leave the game area
      gameControl.gameIsRunning = false;
      gameControl.stopMouseFail();
      gameCompleted(false);
    }
  }
});

//* Make canvas responsive
//* Canvas element will get the full screen
const resize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  gameControl.cleanCanvas();
  gameControl.draw();
};
window.addEventListener("resize", resize);
