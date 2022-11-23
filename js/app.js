function League() {
  // can be in sepearte file
  // The order of clubs which is the base of index ordering in the other variables
  this.clubName = [
    "Arsenal",
    "Aston Villa",
    "Bournemouth",
    "Brentford",
    "Brighton",
    "Chelsea",
    "Crystal Palace",
    "Everton",
  ];
  this.clubTier = [1, 4, 4, 3, 2, 2, 3, 3];
  this.fixture = {
    gw1: [
      [1, 3],
      [2, 0],
      [4, 7],
      [5, 6],
    ],
    gw2: [
      [4, 2],
      [1, 0],
      [5, 7],
      [6, 3],
    ],
  };
  this.result = {};
}
