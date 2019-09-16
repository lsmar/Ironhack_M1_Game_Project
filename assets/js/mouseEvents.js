//* Get Mouse Events
let mouseX, mouseY;

canvas.addEventListener("mousemove", e => {
  if (
    e.clientX > gameAreaCoords.w0 &&
    e.clientY > gameAreaCoords.h0 &&
    e.clientX < gameAreaCoords.w0 + gameAreaCoords.wMax &&
    e.clientY < gameAreaCoords.h0 + gameAreaCoords.hMax
  ) {
    //* Detect mouse colision
    let isInObstacle = obstacles.some(obstacle => obstacle.mouseIsIn(e.clientX, e.clientY));
    console.log(isInObstacle);
    if (!isInObstacle && canDrawMouseMove) {
      drawLine(ctx, mouseX, mouseY, e.clientX, e.clientY);
    }
    if (end.isMouseHere(e.clientX, e.clientY)) {
      canDrawMouseMove = false;
    }
  }
  mouseX = e.clientX;
  mouseY = e.clientY;
});
canvas.addEventListener("mouseup", e => {
  if (start.isMouseHere(e.clientX, e.clientY)) {
    canDrawMouseMove = true;
    obstacles.forEach(obstacle => {
      obstacle.setCanDraw(false);
    });
    redraw();
  }
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
  ctx.lineWidth = wUnit / 20;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};
