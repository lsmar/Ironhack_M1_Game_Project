//* { w0: wInit, h0: hInit, wMax: wUnit * gridSize, hMax: hUnit * gridSize, gridSize: gridSize }
class Obstacles {
  constructor(gameArea, wPos = 0, hPos = 0, canDraw = true) {
    this.gameArea = gameArea;
    this.wPos = wPos;
    this.hPos = hPos;
    this.canDraw = canDraw;
    if (this.wPos === -1) {
      this.wPos = this.randomIndex(this.gameArea.gridSize);
    }
    if (this.hPos === -1) {
      this.hPos = this.randomIndex(this.gameArea.gridSize);
    }
    this.w0 = this.gameArea.w0 + this.gameArea.wUnit * this.wPos;
    this.h0 = this.gameArea.h0 + this.gameArea.hUnit * this.hPos;
    // this.context = context;
    this.colors = ["#ff3400", "#ff0034", "#3400ff", "#220033", "#456633"];
    this.color = this.randomColor(this.colors);
  }
  draw = context => {
    if (this.canDraw) {
      context.fillStyle = this.color;
      context.fillRect(this.w0, this.h0, this.gameArea.wUnit, this.gameArea.hUnit);
    }
  };
  setCanDraw = can => {
    this.canDraw = can;
  };
  mouseIsIn = (mouseX, mouseY) =>
    mouseX > this.w0 && mouseX < this.w0 + this.gameArea.wUnit && mouseY > this.h0 && mouseY < this.h0 + this.gameArea.hUnit;
  randomColor = colorArray => colorArray[Math.floor(Math.random() * colorArray.length)];
  randomIndex = len => Math.floor(Math.random() * len);
}
