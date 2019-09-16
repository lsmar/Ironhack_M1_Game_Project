//* Make canvas responsive
//* Canvas element will get the full screen
const resize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
};
window.addEventListener("resize", resize);

//* Sizes units
var wUnit = 0,
  hUnit = 0;

//Get canvas element
let gridSize = 4;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const gameAreaCoords = drawGameArea(ctx, canvas.width, canvas.height, true, gridSize);
