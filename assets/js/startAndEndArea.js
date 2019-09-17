class StartArea {
  constructor(context, gameArea, wPos = 0, hPos = 0) {
    this.gameArea = gameArea;
    this.ctx = context;
    this.hPos = hPos;
    this.wPos = wPos;
  }
  draw = () => {
    this.ctx.fillStyle = "green";
    for (let idxX = 0; idxX < 8; idxX += 1) {
      for (let idxY = 0; idxY < 8; idxY += 1) {
        if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
          this.ctx.fillRect(
            this.gameArea.w0 + this.wPos * this.gameArea.wUnit + (idxX * this.gameArea.wUnit) / 8,
            this.gameArea.h0 + this.hPos * this.gameArea.hUnit + (idxY * this.gameArea.hUnit) / 8,
            this.gameArea.wUnit / 8,
            this.gameArea.hUnit / 8
          );
        }
      }
    }
  };
  isMouseHere = (mouseX, mouseY) =>
    mouseX > this.gameArea.w0 + this.wPos * this.gameArea.wUnit &&
    mouseX < this.gameArea.w0 + this.wPos * this.gameArea.wUnit + this.gameArea.wUnit &&
    mouseY > this.gameArea.h0 + this.hPos * this.gameArea.hUnit &&
    mouseY < this.gameArea.h0 + this.hPos * this.gameArea.hUnit + this.gameArea.hUnit;
}
class EndArea {
  constructor(context, gameArea, wPos, hPos) {
    this.gameArea = gameArea;
    this.ctx = context;
    this.hPos = hPos;
    this.wPos = wPos;
    if (wPos == 0) {
      this.wPos = this.gameArea.gridSize - 1;
    }
  }
  draw = () => {
    this.ctx.fillStyle = "black";
    for (let idxX = 0; idxX < 8; idxX += 1) {
      for (let idxY = 0; idxY < 8; idxY += 1) {
        if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
          this.ctx.fillRect(
            this.gameArea.w0 + this.wPos * this.gameArea.wUnit + (idxX * this.gameArea.wUnit) / 8,
            this.gameArea.h0 + this.hPos * this.gameArea.hUnit + (idxY * this.gameArea.hUnit) / 8,
            this.gameArea.wUnit / 8,
            this.gameArea.hUnit / 8
          );
        }
      }
    }
  };
  isMouseHere = (mouseX, mouseY) =>
    mouseX > this.gameArea.w0 + this.wPos * this.gameArea.wUnit &&
    mouseX < this.gameArea.w0 + this.wPos * this.gameArea.wUnit + this.gameArea.wUnit &&
    mouseY > this.gameArea.h0 + this.hPos * this.gameArea.hUnit &&
    mouseY < this.gameArea.h0 + this.hPos * this.gameArea.hUnit + this.gameArea.hUnit;
}
