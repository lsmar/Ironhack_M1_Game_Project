const levelsPredefined = [
  {
    levelDifficulty: "Easy",
    gridSize: 5,
    start: [0, 2],
    end: [4, 4],
    correctPath: [[0, 2], [0, 1], [1, 1], [1, 2], [1, 3], [1, 4], [2, 4], [3, 4], [4, 4]],
    amountOfObstacles: 10,
    points: {
      difficulty: 5,
      time: [{ time: 1000, points: 15 }, { time: 2000, points: 5 }, { time: Infinity, points: 0 }],
      gridOn: -5,
      gridOff: 20
    }
  },
  {
    levelDifficulty: "Easy",
    gridSize: 5,
    start: [0, 4],
    end: [4, 1],
    correctPath: [[0, 4], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [4, 3], [4, 2], [4, 1]],
    amountOfObstacles: 10,
    points: {
      difficulty: 5,
      time: [{ time: 1000, points: 15 }, { time: 2000, points: 5 }, { time: Infinity, points: 0 }],
      gridOn: -5,
      gridOff: 20
    }
  },
  {
    levelDifficulty: "Easy",
    gridSize: 10,
    start: [2, 2],
    end: [9, 9],
    correctPath: [[2, 2], [2, 3], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9]],
    amountOfObstacles: 70,
    points: {
      difficulty: 20,
      time: [{ time: 3000, points: 15 }, { time: 6000, points: 5 }, { time: Infinity, points: 0 }],
      gridOn: -5,
      gridOff: 20
    }
  }
];
