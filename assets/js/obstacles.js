//* { w0: wInit, h0: hInit, wMax: wUnit * gridSize, hMax: hUnit * gridSize, gridSize: gridSize }
class Obstacles {
  constructor(context, gameArea, wPos = 0, hPos = 0) {
    this.gameArea = gameArea;
    this.wPos = wPos;
    this.hPos = hPos;
    this.w0 = this.gameArea.w0 + this.gameArea.wUnit * this.wPos;
    (this.h0 = this.gameArea.h0 + this.gameArea.hUnit * this.wPos), this.h0;
    this.context = context;
    this.colors = ["#ff3400", "#ff0034", "#3400ff", "#220033", "#456633"];
  }
  draw = () => {
    this.context.fillStyle = this.randomColor(this.colors);
    this.context.fillRect(this.w0, this.h0, this.gameArea.wUnit, this.gameArea.hUnit);
  };
  mouseIsIn = (mouseX, mouseY) => {
    return mouseX > this.w0 && mouseX < this.w0 + this.gameArea.wUnit && mouseY > this.h0 && mouseY < this.h0 + this.gameArea.hUnit;
  };
  randomColor = colorArray => colorArray[Math.floor(Math.random() * colorArray.length)];
}
