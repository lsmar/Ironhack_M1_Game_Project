class LevelControl {
  constructor(levelDifficulty, corretPath, start, end, gridSize, amountOfObstacles, points) {
    this.levelDifficulty = levelDifficulty;
    this.corretPath = corretPath;
    this.start = start;
    this.end = end;
    this.gridSize = gridSize;
    this.amountOfObstacles = amountOfObstacles;
    this.points = points;
    this.possibleObstaclesPositions = [];
  }
  sortObstcles=()=>{
    for(let row=0;row<this.gridSize;row+=1){
      // let colArr = [];
      for(let col=0;col<this.gridSize;col+=1){
        // calArr.push([row,col])
        this.possibleObstaclesPositions.push([row,col]);
      }
      // this.possibleObstaclesPositions.push(calArr);
    }
    console.log(this.possibleObstaclesPositions)
  }
}
const levelExample={
  levelDifficulty:"Easy",
  gridSize:5,
  start:[0,2],
  end:[4,4],
  corretPath:[[0,2],[0,1],[1,1],[1,2],[1,3],[1,4],[2,4],[3,4],[4,4]],
  amountOfObstacles:10,
  points:{
    difficulty = 5;
    time: [{time:1000,points: 15},{time:2000,points: 5},{time:Infinity,points: 0}],
    gridOn: -5,
    gridOff: 20 }
  }