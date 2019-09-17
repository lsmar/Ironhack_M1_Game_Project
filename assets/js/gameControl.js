class GameControl {
  constructor(playerName) {
    this.playerName = playerName;
    this.levelsEasy = []; // Get from file
    this.levelsMedium = []; // Get from file
    this.levelsHard = []; // Get from file
    this.currentLevel = 0;
    this.totalTime = 0;
    this.totalPoints = 0;
    this.levelsHistory = [];
  }
}
