//! Code used only to generate ES2015 compatible file
// class LevelControl {
//   constructor(levelDifficulty, correctPath, start, end, gridSize, amountOfObstacles, points) {
//     this.levelDifficulty = levelDifficulty;
//     this.correctPath = correctPath;
//     this.start = start;
//     this.end = end;
//     this.gridSize = gridSize;
//     this.amountOfObstacles = amountOfObstacles;
//     this.points = points;
//     this.obstaclesPositions = this.randomizeObstclesPosAndCreate();
//     this.obstacles = [];
//   }
//   randomizeObstclesPosAndCreate = () => {
//     let freePosGrid = [];
//     for (let row = 0; row < this.gridSize; row += 1) {
//       for (let col = 0; col < this.gridSize; col += 1) {
//         freePosGrid.push([row, col]);
//       }
//     }
//     const result = [];
//     freePosGrid = freePosGrid.filter(el => !this.correctPath.some(item => item[0] === el[0] && item[1] === el[1]));
//     for (let idx = 0; result.length < this.amountOfObstacles; idx += 1) {
//       const getIndex = this.randomIndex(freePosGrid.length);
//       result.push(freePosGrid.splice(getIndex, 1));
//     }
//     return result;
//   };
//   createObstacles = gameArea => {
//     this.obstaclesPositions.forEach(obstacle => {
//       this.obstacles.push(new Obstacles(gameArea, obstacle[0][0], obstacle[0][1]));
//     });
//   };
//   randomIndex = len => Math.floor(Math.random() * len);
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

var LevelControl = function LevelControl(levelDifficulty, correctPath, start, end, gridSize, amountOfObstacles, points) {
  var _this = this;

  _classCallCheck(this, LevelControl);

  _defineProperty(this, "randomizeObstclesPosAndCreate", function() {
    var freePosGrid = [];

    for (var row = 0; row < _this.gridSize; row += 1) {
      for (var col = 0; col < _this.gridSize; col += 1) {
        freePosGrid.push([row, col]);
      }
    }

    var result = [];
    freePosGrid = freePosGrid.filter(function(el) {
      return !_this.correctPath.some(function(item) {
        return item[0] === el[0] && item[1] === el[1];
      });
    });

    for (var idx = 0; result.length < _this.amountOfObstacles; idx += 1) {
      var getIndex = _this.randomIndex(freePosGrid.length);

      result.push(freePosGrid.splice(getIndex, 1));
    }

    return result;
  });

  _defineProperty(this, "createObstacles", function(gameArea) {
    _this.obstaclesPositions.forEach(function(obstacle) {
      _this.obstacles.push(new Obstacles(gameArea, obstacle[0][0], obstacle[0][1]));
    });
  });

  _defineProperty(this, "randomIndex", function(len) {
    return Math.floor(Math.random() * len);
  });

  this.levelDifficulty = levelDifficulty;
  this.correctPath = correctPath;
  this.start = start;
  this.end = end;
  this.gridSize = gridSize;
  this.amountOfObstacles = amountOfObstacles;
  this.points = points;
  this.obstaclesPositions = this.randomizeObstclesPosAndCreate();
  this.obstacles = [];
};
