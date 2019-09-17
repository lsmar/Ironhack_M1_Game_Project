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
    this.levelsHistory = [];
    this.levelInstance = 0;
    this.gameAreaCoords = {};
    this.grid = {};
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
    //* create the grid calc relative positions
    this.grid = new Grid(this.ctx, canvas.width, canvas.height, this.levelInstance.gridSize);
    this.gameAreaCoords = this.grid.calcGameArea(ctx, canvas.width, canvas.height, gridSize);
    //* Create and draw obstacles
    this.levelInstance.createObstacles(this.gameAreaCoords);
    this.drawObstacles(this.levelInstance.obstacles);
    //* Create the start and the end area
    this.start = new StartArea(this.ctx, this.gameAreaCoords, this.levelInstance.start[0], this.levelInstance.start[1]);
    this.start.draw();
    this.end = new EndArea(this.ctx, this.gameAreaCoords, this.levelInstance.end[0], this.levelInstance.end[1]);
    this.end.draw();
    //* Draw game area
    this.grid.drawGameArea(this.gameAreaCoords, true);
  };
  drawObstacles = obstacles => {
    obstacles.forEach(obstacle => obstacle.draw(this.ctx));
  };
}
