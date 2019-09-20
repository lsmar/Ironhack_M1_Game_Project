//! Code used only to generate ES2015 compatible file
// class StartArea {
//   constructor(context, gameArea, wPos = 0, hPos = 0) {
//     this.gameArea = gameArea;
//     this.ctx = context;
//     this.hPos = hPos;
//     this.wPos = wPos;
//   }
//   draw = () => {
//     this.ctx.fillStyle = "#278A45";
//     for (let idxX = 0; idxX < 8; idxX += 1) {
//       for (let idxY = 0; idxY < 8; idxY += 1) {
//         if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
//           this.ctx.fillRect(
//             this.gameArea.w0 + this.wPos * this.gameArea.wUnit + (idxX * this.gameArea.wUnit) / 8,
//             this.gameArea.h0 + this.hPos * this.gameArea.hUnit + (idxY * this.gameArea.hUnit) / 8,
//             this.gameArea.wUnit / 8,
//             this.gameArea.hUnit / 8
//           );
//         }
//       }
//     }
//   };
//   isMouseHere = (mouseX, mouseY) =>
//     mouseX > this.gameArea.w0 + this.wPos * this.gameArea.wUnit &&
//     mouseX < this.gameArea.w0 + this.wPos * this.gameArea.wUnit + this.gameArea.wUnit &&
//     mouseY > this.gameArea.h0 + this.hPos * this.gameArea.hUnit &&
//     mouseY < this.gameArea.h0 + this.hPos * this.gameArea.hUnit + this.gameArea.hUnit;
// }
// class EndArea {
//   constructor(context, gameArea, wPos, hPos) {
//     this.gameArea = gameArea;
//     this.ctx = context;
//     this.hPos = hPos;
//     this.wPos = wPos;
//     if (wPos == 0) {
//       this.wPos = this.gameArea.gridSize - 1;
//     }
//   }
//   draw = () => {
//     this.ctx.fillStyle = "#3c3c3c";
//     for (let idxX = 0; idxX < 8; idxX += 1) {
//       for (let idxY = 0; idxY < 8; idxY += 1) {
//         if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
//           this.ctx.fillRect(
//             this.gameArea.w0 + this.wPos * this.gameArea.wUnit + (idxX * this.gameArea.wUnit) / 8,
//             this.gameArea.h0 + this.hPos * this.gameArea.hUnit + (idxY * this.gameArea.hUnit) / 8,
//             this.gameArea.wUnit / 8,
//             this.gameArea.hUnit / 8
//           );
//         }
//       }
//     }
//   };
//   isMouseHere = (mouseX, mouseY) =>
//     mouseX > this.gameArea.w0 + this.wPos * this.gameArea.wUnit &&
//     mouseX < this.gameArea.w0 + this.wPos * this.gameArea.wUnit + this.gameArea.wUnit &&
//     mouseY > this.gameArea.h0 + this.hPos * this.gameArea.hUnit &&
//     mouseY < this.gameArea.h0 + this.hPos * this.gameArea.hUnit + this.gameArea.hUnit;
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

var StartArea = function StartArea(context, gameArea) {
  var _this = this;

  var wPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hPos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  _classCallCheck(this, StartArea);

  _defineProperty(this, "draw", function() {
    _this.ctx.fillStyle = "#278A45";

    for (var idxX = 0; idxX < 8; idxX += 1) {
      for (var idxY = 0; idxY < 8; idxY += 1) {
        if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
          _this.ctx.fillRect(
            _this.gameArea.w0 + _this.wPos * _this.gameArea.wUnit + (idxX * _this.gameArea.wUnit) / 8,
            _this.gameArea.h0 + _this.hPos * _this.gameArea.hUnit + (idxY * _this.gameArea.hUnit) / 8,
            _this.gameArea.wUnit / 8,
            _this.gameArea.hUnit / 8
          );
        }
      }
    }
  });

  _defineProperty(this, "isMouseHere", function(mouseX, mouseY) {
    return (
      mouseX > _this.gameArea.w0 + _this.wPos * _this.gameArea.wUnit &&
      mouseX < _this.gameArea.w0 + _this.wPos * _this.gameArea.wUnit + _this.gameArea.wUnit &&
      mouseY > _this.gameArea.h0 + _this.hPos * _this.gameArea.hUnit &&
      mouseY < _this.gameArea.h0 + _this.hPos * _this.gameArea.hUnit + _this.gameArea.hUnit
    );
  });

  this.gameArea = gameArea;
  this.ctx = context;
  this.hPos = hPos;
  this.wPos = wPos;
};

var EndArea = function EndArea(context, gameArea, wPos, hPos) {
  var _this2 = this;

  _classCallCheck(this, EndArea);

  _defineProperty(this, "draw", function() {
    _this2.ctx.fillStyle = "#3c3c3c";

    for (var idxX = 0; idxX < 8; idxX += 1) {
      for (var idxY = 0; idxY < 8; idxY += 1) {
        if ((idxX % 2 == 1 && idxY % 2 == 0) || (idxX % 2 == 0 && idxY % 2 == 1)) {
          _this2.ctx.fillRect(
            _this2.gameArea.w0 + _this2.wPos * _this2.gameArea.wUnit + (idxX * _this2.gameArea.wUnit) / 8,
            _this2.gameArea.h0 + _this2.hPos * _this2.gameArea.hUnit + (idxY * _this2.gameArea.hUnit) / 8,
            _this2.gameArea.wUnit / 8,
            _this2.gameArea.hUnit / 8
          );
        }
      }
    }
  });

  _defineProperty(this, "isMouseHere", function(mouseX, mouseY) {
    return (
      mouseX > _this2.gameArea.w0 + _this2.wPos * _this2.gameArea.wUnit &&
      mouseX < _this2.gameArea.w0 + _this2.wPos * _this2.gameArea.wUnit + _this2.gameArea.wUnit &&
      mouseY > _this2.gameArea.h0 + _this2.hPos * _this2.gameArea.hUnit &&
      mouseY < _this2.gameArea.h0 + _this2.hPos * _this2.gameArea.hUnit + _this2.gameArea.hUnit
    );
  });

  this.gameArea = gameArea;
  this.ctx = context;
  this.hPos = hPos;
  this.wPos = wPos;

  if (wPos == 0) {
    this.wPos = this.gameArea.gridSize - 1;
  }
};
