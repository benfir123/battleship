export default function createPlayer(name) {
  return {
    name: name,
    alreadyHitCoords: [],
    isTurn: true,
    attack(coordinates, gameBoard) {
      this.alreadyHitCoords.push(coordinates);
      gameBoard.receiveAttack(coordinates);
      this.isTurn = true;
    },
    randomlyAttack(gameBoard) {
      if (this.alreadyHitCoords.length === 100) return;
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      while (this.hasAlreadyHit(x, y)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }

      this.alreadyHitCoords.push([x, y]);
      gameBoard.receiveAttack([x, y]);
    },
    hasAlreadyHit(x, y) {
      for (let i = 0; i < this.alreadyHitCoords.length; i++) {
        if (
          this.alreadyHitCoords[i][0] === x &&
          this.alreadyHitCoords[i][1] === y
        ) {
          return true;
        }
      }
      return false;
    },
  };
}
