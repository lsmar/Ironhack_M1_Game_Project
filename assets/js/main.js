let gameAreaCoords = {};
const obstacles = [];
let canDrawMouseMove = false;

//* Make canvas responsive
//* Canvas element will get the full screen
const resize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  // draw();
};
window.addEventListener("resize", resize);

//* Sizes units
var wUnit = 0,
  hUnit = 0;

//* Get canvas element
let gridSize = 5;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var gameControl = new GameControl(ctx, "Lucas", levelsPredefined);

gameControl.startLevel(0);
const end = new EndArea(ctx, gameAreaCoords, 3);
end.draw();
const start = new StartArea(ctx, gameAreaCoords, 3);
start.draw();

const redraw = () => {
  // console.log("Redraw called");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameAreaCoords = drawGameArea(ctx, canvas.width, canvas.height, false, gridSize);
  obstacles.forEach(obstacle => {
    obstacle.draw();
  });
  start.draw();
  end.draw();
};
