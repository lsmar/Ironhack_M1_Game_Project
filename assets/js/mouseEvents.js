//* Get Mouse Events
let mouseX, mouseY;

canvas.addEventListener("mousemove", e => {
  if (
    e.clientX > gameAreaCoords.w0 &&
    e.clientY > gameAreaCoords.h0 &&
    e.clientX < gameAreaCoords.w0 + gameAreaCoords.wMax &&
    e.clientY < gameAreaCoords.h0 + gameAreaCoords.hMax
  ) {
    drawLine(ctx, mouseX, mouseY, e.clientX, e.clientY);
  }
  mouseX = e.clientX;
  mouseY = e.clientY;
});
const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  var grd = ctx.createLinearGradient(gameAreaCoords.w0, gameAreaCoords.h0, gameAreaCoords.w0 + gameAreaCoords.wMax, gameAreaCoords.h0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "green");
  // var grd = ctx.createRadialGradient(50, 50, 5, 50, 50, 100);
  // grd.addColorStop(0, "#ef4b4b");
  // grd.addColorStop(1, "#ec8f6a");
  ctx.strokeStyle = grd;
  ctx.lineWidth = 5;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};
