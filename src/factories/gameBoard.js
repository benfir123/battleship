import createShip from "./ship";

let ship1;
const shipLengths = [5, 4, 3, 3, 2];

export default function createGameBoard() {
  return {
    coordinates: [],
    intialize() {
      for (let i = 0; i < 10; i++) {
        this.coordinates[i] = [];
        for (let j = 0; j < 10; j++) {
          this.coordinates[i][j] = {
            hasShip: false,
            isHit: false,
            isMissed: false,
            position: undefined,
          };
        }
      }
    },
    placeShip(length, pos) {
      ship1 = createShip(length);
      for (let i = 0; i < length; i++) {
        this.coordinates[pos[0]][pos[1] + i].hasShip = true;
        this.coordinates[pos[0]][pos[1] + i].position = i;
      }
    },
    alreadyPlaceCoords: [],
    placeShipsRandomly() {
      for (let i = 0; i < shipLengths.length; i++) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * (10 - shipLengths[i]));
        while (
          this.hasAlreadyPlaced(x, y) ||
          this.hasShipAlready(x, y, shipLengths[i])
        ) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * (10 - shipLengths[i]));
        }
        this.alreadyPlaceCoords.push([x, y]);
        this.placeShip(shipLengths[i], [x, y]);
        console.log("placedship");
      }
      const test = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (this.coordinates[i][j].hasShip) test.push(this.coordinates[i][j]);
        }
      }
      console.log(test);
    },
    hasAlreadyPlaced(x, y) {
      for (let i = 0; i < this.alreadyPlaceCoords.length; i++) {
        if (
          this.alreadyPlaceCoords[i][0] === x &&
          this.alreadyPlaceCoords[i][1] === y
        ) {
          return true;
        }
      }
      return false;
    },
    hasShipAlready(x, y, shipLength) {
      for (let i = 0; i < shipLength; i++) {
        if (this.coordinates[x][y + i].hasShip) return true;
      }
      return false;
    },
    receiveAttack(pos) {
      if (this.coordinates[pos[0]][pos[1]].hasShip) {
        this.coordinates[pos[0]][pos[1]].isHit = true;
        ship1.hit(this.coordinates[pos[0]][pos[1]].position);
      } else {
        this.coordinates[pos[0]][pos[1]].isMissed = true;
      }
    },
    allShipsSunk() {
      const allPositions = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          allPositions.push(this.coordinates[i][j]);
        }
      }
      return !allPositions.some((el) => el.hasShip && !el.isHit);
    },
  };
}
export { ship1 };
