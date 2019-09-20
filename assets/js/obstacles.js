//! Code used only to generate ES2015 compatible file
// class Obstacles {
//   constructor(gameArea, wPos = 0, hPos = 0, canDraw = true) {
//     this.gameArea = gameArea;
//     this.wPos = wPos;
//     this.hPos = hPos;
//     this.canDraw = canDraw;
//     if (this.wPos === -1) {
//       this.wPos = this.randomIndex(this.gameArea.gridSize);
//     }
//     if (this.hPos === -1) {
//       this.hPos = this.randomIndex(this.gameArea.gridSize);
//     }
//     this.w0 = this.gameArea.w0 + this.gameArea.wUnit * this.wPos;
//     this.h0 = this.gameArea.h0 + this.gameArea.hUnit * this.hPos;
//     // this.context = context;
//     this.colors = ["#33A9AC", "#FFA646", "#F86041", "#982062", "#343779"];
//     this.color = this.randomColor(this.colors);
//   }
//   draw = context => {
//     if (this.canDraw) {
//       context.fillStyle = this.color;
//       context.fillRect(this.w0, this.h0, this.gameArea.wUnit, this.gameArea.hUnit);
//     }
//   };
//   setCanDraw = can => {
//     this.canDraw = can;
//   };
//   mouseIsIn = (mouseX, mouseY) =>
//     mouseX > this.w0 && mouseX < this.w0 + this.gameArea.wUnit && mouseY > this.h0 && mouseY < this.h0 + this.gameArea.hUnit;

//   randomColor = colorArray => colorArray[Math.floor(Math.random() * colorArray.length)];
//   randomIndex = len => Math.floor(Math.random() * len);
//   newGameArea = gameArea => {
//     this.gameArea = gameArea;
//     this.w0 = this.gameArea.w0 + this.gameArea.wUnit * this.wPos;
//     this.h0 = this.gameArea.h0 + this.gameArea.hUnit * this.hPos;
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

var Obstacles = function Obstacles(_gameArea) {
  var _this = this;

  var wPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var hPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var canDraw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  _classCallCheck(this, Obstacles);

  _defineProperty(this, "draw", function(context) {
    if (_this.canDraw) {
      context.fillStyle = _this.color;
      context.fillRect(_this.w0, _this.h0, _this.gameArea.wUnit, _this.gameArea.hUnit);
    }
  });

  _defineProperty(this, "setCanDraw", function(can) {
    _this.canDraw = can;
  });

  _defineProperty(this, "mouseIsIn", function(mouseX, mouseY) {
    return mouseX > _this.w0 && mouseX < _this.w0 + _this.gameArea.wUnit && mouseY > _this.h0 && mouseY < _this.h0 + _this.gameArea.hUnit;
  });

  _defineProperty(this, "randomColor", function(colorArray) {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  });

  _defineProperty(this, "randomIndex", function(len) {
    return Math.floor(Math.random() * len);
  });

  _defineProperty(this, "newGameArea", function(gameArea) {
    _this.gameArea = gameArea;
    _this.w0 = _this.gameArea.w0 + _this.gameArea.wUnit * _this.wPos;
    _this.h0 = _this.gameArea.h0 + _this.gameArea.hUnit * _this.hPos;
  });

  this.gameArea = _gameArea;
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
  this.h0 = this.gameArea.h0 + this.gameArea.hUnit * this.hPos; // this.context = context;

  this.colors = ["#33A9AC", "#FFA646", "#F86041", "#982062", "#343779"];
  this.color = this.randomColor(this.colors);
};
