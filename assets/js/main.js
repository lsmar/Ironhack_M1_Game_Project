let gameAreaCoords = {};
const obstacles = [];
let canDrawMouseMove = false;
const draw = () => {
  gameAreaCoords = drawGameArea(ctx, canvas.width, canvas.height, true, gridSize);

  obstacles.push(new Obstacles(ctx, gameAreaCoords, -1, -1));
  obstacles.push(new Obstacles(ctx, gameAreaCoords, -1, -1));
  obstacles.push(new Obstacles(ctx, gameAreaCoords, -1, -1));
  obstacles.forEach(obstacle => {
    obstacle.draw();
  });
};

//* Make canvas responsive
//* Canvas element will get the full screen
const resize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  draw();
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
draw();

const end = new EndArea(ctx, gameAreaCoords, 3);
end.draw();
const start = new StartArea(ctx, gameAreaCoords, 3);
start.draw();

const redraw = () => {
  // console.log("Redraw called");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameAreaCoords = drawGameArea(ctx, canvas.width, canvas.height, true, gridSize);
  obstacles.forEach(obstacle => {
    obstacle.draw();
  });
  start.draw();
  end.draw();
};
