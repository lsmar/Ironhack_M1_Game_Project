class MouseHistory {
  constructor(context, x0, y0) {
    this.ctx = context;
    this.x0 = x0;
    this.y0 = y0;
    this.history = [];
    this.history.push({ x: this.x0, y: this.y0 });
    this.startTime = Date.now();
    this.endTime = 0;
  }
  addPosToHistory = (mouseX, mouseY) => {
    this.history.push({ x: mouseX, y: mouseY });
  };
  drawLine = (x1, y1, x2, y2, gameAreaCoords) => {
    this.ctx.beginPath();
    // console.log(mouseMove.history);
    var grd = this.ctx.createLinearGradient(gameAreaCoords.w0, gameAreaCoords.h0, gameAreaCoords.w0 + gameAreaCoords.wMax, gameAreaCoords.h0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "green");
    // var grd = this.ctx.createRadialGradient(50, 50, 5, 50, 50, 100);
    // grd.addColorStop(0, "#ef4b4b");
    // grd.addColorStop(1, "#ec8f6a");
    this.ctx.strokeStyle = grd;
    this.ctx.lineWidth = wUnit / 20;
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.ctx.closePath();
  };
  drawLineHistory = gameArea => {
    for (let index = 1; index < this.history.length; index += 1) {
      this.drawLine(this.history[index - 1].x, this.history[index - 1].y, this.history[index].x, this.history[index].y, gameArea);
    }
  };
}
