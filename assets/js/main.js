//* Make canvas responsive
//* Canvas element will get the full screen
const resize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
};
window.addEventListener("resize", resize);

//Get canvas element
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillRect(0, 0, 5000, 500);

//Get Mouse Events
let mouseX, mouseY;
canvas.addEventListener("mouseenter", e => {
  console.log(e);
  mouseX = e.clientX;
  mouseY = e.clientY;
});

canvas.addEventListener("mousemove", e => {
  drawLine(ctx, mouseX, mouseY, e.clientX, e.clientY);
  mouseX = e.clientX;
  mouseY = e.clientY;
});
const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  var grd = ctx.createRadialGradient(50, 50, 5, 50, 50, 100);
  ctx.lineJoin = "round";
  grd.addColorStop(0, "#ef4b4b");
  grd.addColorStop(1, "#ec8f6a");
  ctx.strokeStyle = grd;
  ctx.lineWidth = 5;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};
