//! Code used only to generate ES2015 compatible file
// class Grid {
//   constructor(context, width, heigth, gridSize = 10) {
//     this.ctx = context;
//     this.width = width;
//     this.heigth = heigth;
//     this.gridSize = gridSize;
//   }
//   calcGameArea = () => {
//     let hInit, wInit, wUnit, hUnit;
//     if (this.width * 0.94 > this.heigth * 0.94) {
//       //* the game area will be limited by heigth
//       wUnit = (this.heigth * 0.94) / this.gridSize;
//       hUnit = wUnit;
//       hInit = this.heigth * 0.03;
//       wInit = (this.width * 0.94 - hUnit * this.gridSize) / 2 + this.width * 0.03;
//     } else {
//       //* the game area will be limited by width
//       wUnit = (this.width * 0.94) / this.gridSize;
//       hUnit = wUnit;
//       hInit = (this.heigth * 0.94 - hUnit * this.gridSize) / 2 + this.heigth * 0.03;
//       wInit = this.width * 0.03;
//     }
//     return {
//       w0: wInit,
//       h0: hInit,
//       wMax: wUnit * this.gridSize,
//       hMax: hUnit * this.gridSize,
//       gridSize: this.gridSize,
//       wUnit: wUnit,
//       hUnit: hUnit
//     };
//   };
//   drawGameArea = (gameArea, gridOn) => {
//     this.ctx.lineWidth = gameArea.wUnit / 20;
//     this.ctx.strokeStyle = "#3D5E61";
//     this.ctx.strokeRect(gameArea.w0, gameArea.h0, gameArea.wMax, gameArea.hMax);
//     if (gridOn) {
//       //* Vertical grid lines
//       for (let idx = 1; idx < this.gridSize; idx += 1) {
//         this.ctx.beginPath();
//         this.ctx.moveTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0);
//         this.ctx.lineTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0 + gameArea.hMax);
//         this.ctx.stroke();
//       }
//       //* Horizontal grid lines
//       for (let idx = 1; idx < this.gridSize; idx += 1) {
//         this.ctx.beginPath();
//         this.ctx.moveTo(gameArea.w0, gameArea.h0 + gameArea.hUnit * idx);
//         this.ctx.lineTo(gameArea.w0 + gameArea.wMax, gameArea.h0 + gameArea.hUnit * idx);
//         this.ctx.stroke();
//       }
//     }
//   };
// }
"use strict";

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Grid = function Grid(context, width, heigth) {
  var _this = this;

  var gridSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

  _classCallCheck(this, Grid);

  _defineProperty(this, "calcGameArea", function() {
    var hInit, wInit, wUnit, hUnit;

    if (_this.width * 0.94 > _this.heigth * 0.94) {
      //* the game area will be limited by heigth
      wUnit = (_this.heigth * 0.94) / _this.gridSize;
      hUnit = wUnit;
      hInit = _this.heigth * 0.03;
      wInit = (_this.width * 0.94 - hUnit * _this.gridSize) / 2 + _this.width * 0.03;
    } else {
      //* the game area will be limited by width
      wUnit = (_this.width * 0.94) / _this.gridSize;
      hUnit = wUnit;
      hInit = (_this.heigth * 0.94 - hUnit * _this.gridSize) / 2 + _this.heigth * 0.03;
      wInit = _this.width * 0.03;
    }

    return {
      w0: wInit,
      h0: hInit,
      wMax: wUnit * _this.gridSize,
      hMax: hUnit * _this.gridSize,
      gridSize: _this.gridSize,
      wUnit: wUnit,
      hUnit: hUnit
    };
  });

  _defineProperty(this, "drawGameArea", function(gameArea, gridOn) {
    _this.ctx.lineWidth = gameArea.wUnit / 20;
    _this.ctx.strokeStyle = "#3D5E61";

    _this.ctx.strokeRect(gameArea.w0, gameArea.h0, gameArea.wMax, gameArea.hMax);

    if (gridOn) {
      //* Vertical grid lines
      for (var idx = 1; idx < _this.gridSize; idx += 1) {
        _this.ctx.beginPath();

        _this.ctx.moveTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0);

        _this.ctx.lineTo(gameArea.w0 + gameArea.wUnit * idx, gameArea.h0 + gameArea.hMax);

        _this.ctx.stroke();
      } //* Horizontal grid lines

      for (var _idx = 1; _idx < _this.gridSize; _idx += 1) {
        _this.ctx.beginPath();

        _this.ctx.moveTo(gameArea.w0, gameArea.h0 + gameArea.hUnit * _idx);

        _this.ctx.lineTo(gameArea.w0 + gameArea.wMax, gameArea.h0 + gameArea.hUnit * _idx);

        _this.ctx.stroke();
      }
    }
  });

  this.ctx = context;
  this.width = width;
  this.heigth = heigth;
  this.gridSize = gridSize;
};
