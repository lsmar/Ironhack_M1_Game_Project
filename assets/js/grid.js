const drawGameArea = (context, w, h, gridOn = false, gridSize = 10) => {
  let hInit, wInit, wUnit, hUnit;
  if (w * 0.67 > h * 0.94) {
    //* the game area will be limited by heigth
    console.log("limited by heigth");
    wUnit = (h * 0.94) / gridSize;
    hUnit = wUnit;
    hInit = h * 0.03;
    wInit = (w * 0.7 - hUnit * gridSize) / 2 + w * 0.3;
  } else {
    //* the game area will be limited by width
    console.log("limited by width");
    wUnit = (w * 0.67) / gridSize;
    hUnit = wUnit;
    hInit = (h * 0.94 - hUnit * gridSize) / 2 + h * 0.03;
    wInit = w * 0.3;
  }
  ctx.lineWidth = wUnit / 20;
  ctx.strokeStyle = "red";
  ctx.strokeRect(wInit, hInit, wUnit * gridSize, hUnit * gridSize);
  if (gridOn) {
    //* Vertical grid lines
    for (let idx = 1; idx < gridSize; idx += 1) {
      context.beginPath();
      context.moveTo(wInit + wUnit * idx, hInit);
      context.lineTo(wInit + wUnit * idx, hInit + hUnit * gridSize);
      context.stroke();
    }
    //* Horizontal grid lines
    for (let idx = 1; idx < gridSize; idx += 1) {
      context.beginPath();
      context.moveTo(wInit, hInit + hUnit * idx);
      context.lineTo(wInit + wUnit * gridSize, hInit + hUnit * idx);
      context.stroke();
    }
  }
  return {
    w0: wInit,
    h0: hInit,
    wMax: wUnit * gridSize,
    hMax: hUnit * gridSize,
    gridSize: gridSize,
    wUnit: wUnit,
    hUnit: hUnit
  };
};
