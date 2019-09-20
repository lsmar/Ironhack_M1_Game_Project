class Grid {
  constructor(context, width, heigth, gridSize = 10) {
    this.ctx = context;
    this.width = width;
    this.heigth = heigth;
    this.gridSize = gridSize;
  }
  calcGameArea = () => {
    let hInit, wInit, wUnit, hUnit;
    if (this.width * 0.94 > this.heigth * 0.94) {
      //* the game area will be limited by heigth
      wUnit = (this.heigth * 0.94) / this.gridSize;
      hUnit = wUnit;
      hInit = this.heigth * 0.03;
      wInit = (this.width * 0.94 - hUnit * this.gridSize) / 2 + this.width * 0.03;
    } else {
      //* the game area will be limited by width
      wUnit = (this.width * 0.94) / this.gridSize;
      hUnit = wUnit;
      hInit = (this.heigth * 0.94 - hUnit * this.gridSize) / 2 + this.heigth * 0.03;
      wInit = this.width * 0.03;
    }
    return {
      w0: wInit,
      h0: hInit,
      wMax: wUnit * this.gridSize,
      hMax: hUnit * this.gridSize,
      gridSize: this.gridSize,
      wUnit: wUnit,
      hUnit: hUnit
    };
  };
  drawGameArea = (gameArea, gridOn) => {
    this.ctx.lineWidth = gameArea.wUnit / 20;
    this.ctx.strokeStyle = "#3D5E61";
    this.ctx.strokeRect(gameArea.w0, gameArea.h0, gameArea.wMax, gameArea.hMax);
    if (gridOn) {
      //* Vertical grid lines
      for (let idx = 1; idx < this.gridSize; idx += 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0);
        this.ctx.lineTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0 + gameArea.hMax);
        this.ctx.stroke();
      }
      //* Horizontal grid lines
      for (let idx = 1; idx < this.gridSize; idx += 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(gameArea.w0, gameArea.h0 + gameArea.hUnit * idx);
        this.ctx.lineTo(gameArea.w0 + gameArea.wMax, gameArea.h0 + gameArea.hUnit * idx);
        this.ctx.stroke();
      }
    }
  };
}
