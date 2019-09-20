//! Code used only to generate ES2015 compatible file
// class MouseHistory {
//   constructor(context, x0, y0) {
//     this.ctx = context;
//     this.x0 = x0;
//     this.y0 = y0;
//     this.history = [];
//     this.history.push({ x: this.x0, y: this.y0 });
//     this.startTime = Date.now();
//     this.endTime = 0;
//   }
//   addPosToHistory = (mouseX, mouseY) => {
//     this.history.push({ x: mouseX, y: mouseY });
//   };
//   drawLine = (x1, y1, x2, y2, gameAreaCoords) => {
//     this.ctx.beginPath();
//     var grd = this.ctx.createLinearGradient(gameAreaCoords.w0, gameAreaCoords.h0, gameAreaCoords.w0 + gameAreaCoords.wMax, gameAreaCoords.h0);
//     grd.addColorStop(0, "red");
//     grd.addColorStop(1, "green");
//     this.ctx.strokeStyle = grd;
//     this.ctx.lineWidth = wUnit / 20;
//     this.ctx.moveTo(x1, y1);
//     this.ctx.lineTo(x2, y2);
//     this.ctx.stroke();
//     this.ctx.closePath();
//   };
//   levelCompleted = () => {
//     this.endTime = Date.now();
//     return this.endTime - this.startTime;
//   };
//   drawLineHistory = gameArea => {
//     for (let index = 1; index < this.history.length; index += 1) {
//       this.drawLine(this.history[index - 1].x, this.history[index - 1].y, this.history[index].x, this.history[index].y, gameArea);
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

var MouseHistory = function MouseHistory(context, x0, y0) {
  var _this = this;

  _classCallCheck(this, MouseHistory);

  _defineProperty(this, "addPosToHistory", function(mouseX, mouseY) {
    _this.history.push({
      x: mouseX,
      y: mouseY
    });
  });

  _defineProperty(this, "drawLine", function(x1, y1, x2, y2, gameAreaCoords) {
    _this.ctx.beginPath();

    var grd = _this.ctx.createLinearGradient(gameAreaCoords.w0, gameAreaCoords.h0, gameAreaCoords.w0 + gameAreaCoords.wMax, gameAreaCoords.h0);

    grd.addColorStop(0, "red");
    grd.addColorStop(1, "green");
    _this.ctx.strokeStyle = grd;
    _this.ctx.lineWidth = wUnit / 20;

    _this.ctx.moveTo(x1, y1);

    _this.ctx.lineTo(x2, y2);

    _this.ctx.stroke();

    _this.ctx.closePath();
  });

  _defineProperty(this, "levelCompleted", function() {
    _this.endTime = Date.now();
    return _this.endTime - _this.startTime;
  });

  _defineProperty(this, "drawLineHistory", function(gameArea) {
    for (var index = 1; index < _this.history.length; index += 1) {
      _this.drawLine(_this.history[index - 1].x, _this.history[index - 1].y, _this.history[index].x, _this.history[index].y, gameArea);
    }
  });

  this.ctx = context;
  this.x0 = x0;
  this.y0 = y0;
  this.history = [];
  this.history.push({
    x: this.x0,
    y: this.y0
  });
  this.startTime = Date.now();
  this.endTime = 0;
};
