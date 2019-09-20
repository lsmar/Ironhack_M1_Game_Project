//! Code used only to generate ES2015 compatible file
// //* The game Control is responsible to initialize the game and control the game flow
// //* change levels, control history, control points
// class GameControl {
//   constructor(context, playerName, levels) {
//     this.ctx = context;
//     this.playerName = playerName;
//     this.levels = levels; //* Get from file
//     this.currentLevel = -1;
//     this.totalTime = 0;
//     this.totalPoints = 0;
//     this.start;
//     this.end;
//     this.gameIsRunning = false;
//     this.levelsHistory = [];
//     this.levelInstance;
//     this.gameAreaCoords;
//     this.grid;
//     this.mouseInstance;
//     this.mouseOldX;
//     this.mouseOldY;
//     this.drawGridMode = false;
//   }
//   //* startLevel need to recive the next level
//   startLevel = level => {
//     if (!(level < this.levels.length)) {
//       //* Game end complete all levels
//       return;
//     }
//     this.currentLevel = level;
//     this.levelInstance = new LevelControl(
//       this.levels[level].levelDifficulty,
//       this.levels[level].correctPath,
//       this.levels[level].start,
//       this.levels[level].end,
//       this.levels[level].gridSize,
//       this.levels[level].amountOfObstacles,
//       this.levels[level].points
//     );
//     this.draw();
//   };
//   draw = () => {
//     //* create the grid calc relative positions
//     this.grid = new Grid(this.ctx, canvas.width, canvas.height, this.levelInstance.gridSize);
//     this.gameAreaCoords = this.grid.calcGameArea(ctx, canvas.width, canvas.height, gridSize);
//     //* Create and draw obstacles
//     if (!this.gameIsRunning && this.levelInstance.obstacles.length === 0) {
//       this.levelInstance.createObstacles(this.gameAreaCoords);
//     } else if (this.levelInstance.obstacles.length > 0) {
//       this.levelInstance.obstacles.forEach(obstacle => obstacle.newGameArea(this.gameAreaCoords));
//     }
//     this.drawObstacles(this.levelInstance.obstacles);
//     //* Create the start and the end area
//     this.start = new StartArea(this.ctx, this.gameAreaCoords, this.levelInstance.start[0], this.levelInstance.start[1]);
//     this.start.draw();
//     this.end = new EndArea(this.ctx, this.gameAreaCoords, this.levelInstance.end[0], this.levelInstance.end[1]);
//     this.end.draw();
//     //* Draw game area
//     this.grid.drawGameArea(this.gameAreaCoords, this.drawGridMode || !this.gameIsRunning);
//   };
//   cleanCanvas = () => {
//     this.ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.ctx.fillStyle = "#8CBBB2";
//     this.ctx.fillRect(0, 0, canvas.width, canvas.height);
//   };
//   drawObstacles = obstacles => {
//     obstacles.forEach(obstacle => obstacle.draw(this.ctx));
//   };
//   startMouse = event => {
//     this.cleanCanvas();
//     this.mouseOldX = event.clientX;
//     this.mouseOldY = event.clientY;
//     this.mouseInstance = new MouseHistory(this.ctx, event.clientX, event.clientY);
//     this.levelInstance.obstacles.forEach(obstacle => {
//       obstacle.setCanDraw(false);
//     });
//     this.gameIsRunning = true;
//     this.draw();
//     startAudio.play();
//   };
//   mouseMove = event => {
//     this.mouseInstance.addPosToHistory(event.clientX, event.clientY);
//     this.mouseInstance.drawLine(this.mouseOldX, this.mouseOldY, event.clientX, event.clientY, this.gameAreaCoords);
//     this.mouseOldX = event.clientX;
//     this.mouseOldY = event.clientY;
//     //* Detect lose condition by obstables or win
//     const obstacleCondition = this.levelInstance.obstacles.some(obstacle => obstacle.mouseIsIn(event.clientX, event.clientY));
//     const winCondition = this.end.isMouseHere(event.clientX, event.clientY);
//     if (obstacleCondition || winCondition) {
//       this.gameIsRunning = false;
//       this.levelInstance.obstacles.forEach(obstacle => {
//         obstacle.setCanDraw(true);
//       });
//       this.cleanCanvas();
//       this.draw();
//       this.mouseInstance.drawLineHistory(this.gameAreaCoords);
//       if (winCondition) {
//         //* Level completed
//         //* get Points
//         const timeSpended = this.mouseInstance.levelCompleted();
//         this.levelsHistory.push({
//           level: this.currentLevel,
//           completed: true,
//           timeSpended: timeSpended,
//           points: {
//             difficulty: this.levelInstance.points.difficulty,
//             time: this.levelInstance.points.time.filter(item => item.time > timeSpended)[0].points,
//             gridBonus: this.drawGridMode ? this.levelInstance.points.gridOn : this.levelInstance.points.gridOff
//           }
//         });
//         this.levelsHistory[this.currentLevel].points.total = Math.ceil(
//           (this.levelsHistory[this.currentLevel].points.difficulty + this.levelsHistory[this.currentLevel].points.time) *
//             (this.levelsHistory[this.currentLevel].points.gridBonus / 100 + 1)
//         );
//         winAudio.play();
//         //* next level
//         levelDoneEvent();
//         if (this.currentLevel + 1 < this.levels.length) {
//           this.cleanCanvas();
//           this.startLevel(this.currentLevel + 1);
//           canvas.classList.add("hide");
//         } else {
//           this.currentLevel += 1;
//           //* no more levels
//         }
//       } else {
//         //* Opsss obstacle
//         this.stopMouseFail();
//         failAudio.play();
//         gameCompleted(false);
//       }
//     }
//   };
//   stopMouseFail = () => {
//     const timeSpended = this.mouseInstance.levelCompleted();
//     this.levelsHistory.push({
//       level: this.currentLevel,
//       completed: false,
//       timeSpended: timeSpended,
//       points: {
//         difficulty: 0,
//         time: 0,
//         gridBonus: 0,
//         total: 0
//       }
//     });
//   };
//   insideGameArea = event =>
//     event.clientX > this.gameAreaCoords.w0 &&
//     event.clientY > this.gameAreaCoords.h0 &&
//     event.clientX < this.gameAreaCoords.w0 + this.gameAreaCoords.wMax &&
//     event.clientY < this.gameAreaCoords.h0 + this.gameAreaCoords.hMax;
// }
//! Babel translated js to ensure compatibility
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

//* The game Control is responsible to initialize the game and control the game flow
//* change levels, control history, control points
var GameControl = function GameControl(context, playerName, levels) {
  var _this = this;

  _classCallCheck(this, GameControl);

  _defineProperty(this, "startLevel", function(level) {
    if (!(level < _this.levels.length)) {
      //* Game end complete all levels
      return;
    }

    _this.currentLevel = level;
    _this.levelInstance = new LevelControl(
      _this.levels[level].levelDifficulty,
      _this.levels[level].correctPath,
      _this.levels[level].start,
      _this.levels[level].end,
      _this.levels[level].gridSize,
      _this.levels[level].amountOfObstacles,
      _this.levels[level].points
    );

    _this.draw();
  });

  _defineProperty(this, "draw", function() {
    //* create the grid calc relative positions
    _this.grid = new Grid(_this.ctx, canvas.width, canvas.height, _this.levelInstance.gridSize);
    _this.gameAreaCoords = _this.grid.calcGameArea(ctx, canvas.width, canvas.height, gridSize); //* Create and draw obstacles

    if (!_this.gameIsRunning && _this.levelInstance.obstacles.length === 0) {
      _this.levelInstance.createObstacles(_this.gameAreaCoords);
    } else if (_this.levelInstance.obstacles.length > 0) {
      _this.levelInstance.obstacles.forEach(function(obstacle) {
        return obstacle.newGameArea(_this.gameAreaCoords);
      });
    }

    _this.drawObstacles(_this.levelInstance.obstacles); //* Create the start and the end area

    _this.start = new StartArea(_this.ctx, _this.gameAreaCoords, _this.levelInstance.start[0], _this.levelInstance.start[1]);

    _this.start.draw();

    _this.end = new EndArea(_this.ctx, _this.gameAreaCoords, _this.levelInstance.end[0], _this.levelInstance.end[1]);

    _this.end.draw(); //* Draw game area

    _this.grid.drawGameArea(_this.gameAreaCoords, _this.drawGridMode || !_this.gameIsRunning);
  });

  _defineProperty(this, "cleanCanvas", function() {
    _this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    _this.ctx.fillStyle = "#8CBBB2";

    _this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  });

  _defineProperty(this, "drawObstacles", function(obstacles) {
    obstacles.forEach(function(obstacle) {
      return obstacle.draw(_this.ctx);
    });
  });

  _defineProperty(this, "startMouse", function(event) {
    _this.cleanCanvas();

    _this.mouseOldX = event.clientX;
    _this.mouseOldY = event.clientY;
    _this.mouseInstance = new MouseHistory(_this.ctx, event.clientX, event.clientY);

    _this.levelInstance.obstacles.forEach(function(obstacle) {
      obstacle.setCanDraw(false);
    });

    _this.gameIsRunning = true;

    _this.draw();

    startAudio.play();
  });

  _defineProperty(this, "mouseMove", function(event) {
    _this.mouseInstance.addPosToHistory(event.clientX, event.clientY);

    _this.mouseInstance.drawLine(_this.mouseOldX, _this.mouseOldY, event.clientX, event.clientY, _this.gameAreaCoords);

    _this.mouseOldX = event.clientX;
    _this.mouseOldY = event.clientY; //* Detect lose condition by obstables or win

    var obstacleCondition = _this.levelInstance.obstacles.some(function(obstacle) {
      return obstacle.mouseIsIn(event.clientX, event.clientY);
    });

    var winCondition = _this.end.isMouseHere(event.clientX, event.clientY);

    if (obstacleCondition || winCondition) {
      _this.gameIsRunning = false;

      _this.levelInstance.obstacles.forEach(function(obstacle) {
        obstacle.setCanDraw(true);
      });

      _this.cleanCanvas();

      _this.draw();

      _this.mouseInstance.drawLineHistory(_this.gameAreaCoords);

      if (winCondition) {
        //* Level completed
        //* get Points
        var timeSpended = _this.mouseInstance.levelCompleted();

        _this.levelsHistory.push({
          level: _this.currentLevel,
          completed: true,
          timeSpended: timeSpended,
          points: {
            difficulty: _this.levelInstance.points.difficulty,
            time: _this.levelInstance.points.time.filter(function(item) {
              return item.time > timeSpended;
            })[0].points,
            gridBonus: _this.drawGridMode ? _this.levelInstance.points.gridOn : _this.levelInstance.points.gridOff
          }
        });

        _this.levelsHistory[_this.currentLevel].points.total = Math.ceil(
          (_this.levelsHistory[_this.currentLevel].points.difficulty + _this.levelsHistory[_this.currentLevel].points.time) *
            (_this.levelsHistory[_this.currentLevel].points.gridBonus / 100 + 1)
        );
        winAudio.play(); //* next level

        levelDoneEvent();

        if (_this.currentLevel + 1 < _this.levels.length) {
          _this.cleanCanvas();

          _this.startLevel(_this.currentLevel + 1);

          canvas.classList.add("hide");
        } else {
          _this.currentLevel += 1; //* no more levels
        }
      } else {
        //* Opsss obstacle
        _this.stopMouseFail();

        failAudio.play();
        gameCompleted(false);
      }
    }
  });

  _defineProperty(this, "stopMouseFail", function() {
    var timeSpended = _this.mouseInstance.levelCompleted();

    _this.levelsHistory.push({
      level: _this.currentLevel,
      completed: false,
      timeSpended: timeSpended,
      points: {
        difficulty: 0,
        time: 0,
        gridBonus: 0,
        total: 0
      }
    });
  });

  _defineProperty(this, "insideGameArea", function(event) {
    return (
      event.clientX > _this.gameAreaCoords.w0 &&
      event.clientY > _this.gameAreaCoords.h0 &&
      event.clientX < _this.gameAreaCoords.w0 + _this.gameAreaCoords.wMax &&
      event.clientY < _this.gameAreaCoords.h0 + _this.gameAreaCoords.hMax
    );
  });

  this.ctx = context;
  this.playerName = playerName;
  this.levels = levels; //* Get from file

  this.currentLevel = -1;
  this.totalTime = 0;
  this.totalPoints = 0;
  this.start;
  this.end;
  this.gameIsRunning = false;
  this.levelsHistory = [];
  this.levelInstance;
  this.gameAreaCoords;
  this.grid;
  this.mouseInstance;
  this.mouseOldX;
  this.mouseOldY;
  this.drawGridMode = false;
}; //* startLevel need to recive the next level
