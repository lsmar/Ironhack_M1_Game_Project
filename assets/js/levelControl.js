class LevelControl {
  constructor(levelDifficulty, correctPath, start, end, gridSize, amountOfObstacles, points) {
    this.levelDifficulty = levelDifficulty;
    this.correctPath = correctPath;
    this.start = start;
    this.end = end;
    // this.startInstance;
    // this.endInstance = new StartArea();
    this.gridSize = gridSize;
    this.amountOfObstacles = amountOfObstacles;
    this.points = points;
    this.obstaclesPositions = this.randomizeObstclesPosAndCreate();
    this.obstacles = [];
  }
  randomizeObstclesPosAndCreate = () => {
    let freePosGrid = [];
    for (let row = 0; row < this.gridSize; row += 1) {
      for (let col = 0; col < this.gridSize; col += 1) {
        freePosGrid.push([row, col]);
      }
    }
    const result = [];
    freePosGrid = freePosGrid.filter(el => !this.correctPath.some(item => item[0] === el[0] && item[1] === el[1]));
    for (let idx = 0; result.length < this.amountOfObstacles; idx += 1) {
      const getIndex = this.randomIndex(freePosGrid.length);
      result.push(freePosGrid.splice(getIndex, 1));
    }
    return result;
    // console.log(this.obstaclesPositions);
  };
  createObstacles = gameArea => {
    this.obstaclesPositions.forEach(obstacle => {
      this.obstacles.push(new Obstacles(gameArea, obstacle[0][0], obstacle[0][1]));
    });
  };
  randomIndex = len => Math.floor(Math.random() * len);
}

// var levelTest = new LevelControl(
//   levelExample.levelDifficulty,
//   levelExample.correctPath,
//   levelExample.start,
//   levelExample.end,
//   levelExample.gridSize,
//   levelExample.amountOfObstacles,
//   levelExample.points
// );
// console.log(levelTest.obstaclesPositions);
