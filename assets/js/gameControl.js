//* The game Control is responsible to initialize the game and control the game flow
//* change levels, control history, control points
class GameControl {
  constructor(context, playerName, levels) {
    this.ctx = context;
    this.playerName = playerName;
    this.levels = levels; //* Get from file
    this.currentLevel = 0;
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
    this.drawGridMode = true;
  }
  //* startLevel need to recive the next level
  startLevel = level => {
    if (!(level < this.levels.length)) {
      //* Game end complete all levels
      return;
    }
    this.levelInstance = new LevelControl(
      this.levels[level].levelDifficulty,
      this.levels[level].correctPath,
      this.levels[level].start,
      this.levels[level].end,
      this.levels[level].gridSize,
      this.levels[level].amountOfObstacles,
      this.levels[level].points
    );
    this.draw();
  };
  draw = () => {
    //* create the grid calc relative positions
    this.grid = new Grid(this.ctx, canvas.width, canvas.height, this.levelInstance.gridSize);
    this.gameAreaCoords = this.grid.calcGameArea(ctx, canvas.width, canvas.height, gridSize);
    //* Create and draw obstacles
    if (!this.gameIsRunning && this.levelInstance.obstacles.length === 0) {
      this.levelInstance.createObstacles(this.gameAreaCoords);
    } else if (this.levelInstance.obstacles.length > 0) {
      this.levelInstance.obstacles.forEach(obstacle => obstacle.newGameArea(this.gameAreaCoords));
    }
    this.drawObstacles(this.levelInstance.obstacles);
    //* Create the start and the end area
    this.start = new StartArea(this.ctx, this.gameAreaCoords, this.levelInstance.start[0], this.levelInstance.start[1]);
    this.start.draw();
    this.end = new EndArea(this.ctx, this.gameAreaCoords, this.levelInstance.end[0], this.levelInstance.end[1]);
    this.end.draw();
    //* Draw game area
    this.grid.drawGameArea(this.gameAreaCoords, this.drawGridMode || !this.gameIsRunning);
  };
  cleanCanvas = () => {
    if (!this.gameIsRunning) {
      // this.levelInstance.obstacles = [];
    }
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  drawObstacles = obstacles => {
    obstacles.forEach(obstacle => obstacle.draw(this.ctx));
  };
  startMouse = event => {
    this.cleanCanvas();
    this.mouseOldX = event.clientX;
    this.mouseOldY = event.clientY;
    this.mouseInstance = new MouseHistory(this.ctx, event.clientX, event.clientY);
    this.levelInstance.obstacles.forEach(obstacle => {
      obstacle.setCanDraw(false);
    });
    this.gameIsRunning = true;
    this.draw();
  };
  mouseMove = event => {
    this.mouseInstance.addPosToHistory(event.clientX, event.clientY);
    this.mouseInstance.drawLine(this.mouseOldX, this.mouseOldY, event.clientX, event.clientY, this.gameAreaCoords);
    this.mouseOldX = event.clientX;
    this.mouseOldY = event.clientY;
    //* Detect lose condition by obstables or win
    const obstacleCondition = this.levelInstance.obstacles.some(obstacle => obstacle.mouseIsIn(event.clientX, event.clientY));
    const winCondition = this.end.isMouseHere(event.clientX, event.clientY);
    if (obstacleCondition || winCondition) {
      this.gameIsRunning = false;
      this.levelInstance.obstacles.forEach(obstacle => {
        obstacle.setCanDraw(true);
      });
      this.cleanCanvas();
      this.draw();
      this.mouseInstance.drawLineHistory(this.gameAreaCoords);
      if (winCondition) {
        console.log("win this level");
        //get Points
      }
    }
  };

  insideGameArea = event =>
    event.clientX > this.gameAreaCoords.w0 &&
    event.clientY > this.gameAreaCoords.h0 &&
    event.clientX < this.gameAreaCoords.w0 + this.gameAreaCoords.wMax &&
    event.clientY < this.gameAreaCoords.h0 + this.gameAreaCoords.hMax;
}
