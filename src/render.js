import { gameBoard1, gameBoard2 } from "./game";

const gameBoardContainer1 = document.querySelector("#gameboard-1");
const gameBoardContainer2 = document.querySelector("#gameboard-2");
const directions = document.querySelector("body > p");

export default function render() {
  renderMissesToGameBoard2();
  renderHitsToGameBoard2();
  renderMissesToGameBoard1();
  renderHitsToGameBoard1();
  renderShipsToGameBoard1();
}

function renderShipsToGameBoard1() {
  const gameBoard1Squares = document.querySelectorAll(
    "#gameboard-1 > .gameboard-square"
  );
  const gameBoard2PositionsMissed = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameBoard1.coordinates[i][j].hasShip) {
        gameBoard2PositionsMissed.push([i, j]);
      }
    }
  }

  const gameBoard1SquaresWithShip = [];

  for (let i = 0; i < gameBoard2PositionsMissed.length; i++) {
    for (let j = 0; j < gameBoard1Squares.length; j++) {
      if (
        gameBoard2PositionsMissed[i][1] ==
          gameBoard1Squares[j].getAttribute("col") &&
        gameBoard2PositionsMissed[i][0] ==
          gameBoard1Squares[j].getAttribute("row")
      ) {
        gameBoard1SquaresWithShip.push(gameBoard1Squares[j]);
      }
    }
  }
  gameBoard1SquaresWithShip.forEach((el) => el.classList.add("has-ship"));
}

function renderMissesToGameBoard2() {
  const gameBoard2Squares = document.querySelectorAll(
    "#gameboard-2 > .gameboard-square"
  );
  const gameBoard2PositionsMissed = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameBoard2.coordinates[i][j].isMissed) {
        gameBoard2PositionsMissed.push([i, j]);
      }
    }
  }

  const gameBoard2SquaresMissed = [];

  for (let i = 0; i < gameBoard2PositionsMissed.length; i++) {
    for (let j = 0; j < gameBoard2Squares.length; j++) {
      if (
        gameBoard2PositionsMissed[i][1] ==
          gameBoard2Squares[j].getAttribute("col") &&
        gameBoard2PositionsMissed[i][0] ==
          gameBoard2Squares[j].getAttribute("row")
      ) {
        gameBoard2SquaresMissed.push(gameBoard2Squares[j]);
      }
    }
  }
  gameBoard2SquaresMissed.forEach((el) => el.classList.add("missed"));
}

function renderHitsToGameBoard2() {
  const gameBoard2Squares = document.querySelectorAll(
    "#gameboard-2 > .gameboard-square"
  );
  const gameBoard2PositionsHit = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameBoard2.coordinates[i][j].isHit) {
        gameBoard2PositionsHit.push([i, j]);
      }
    }
  }

  const gameBoard2SquaresHit = [];

  for (let i = 0; i < gameBoard2PositionsHit.length; i++) {
    for (let j = 0; j < gameBoard2Squares.length; j++) {
      if (
        gameBoard2PositionsHit[i][1] ==
          gameBoard2Squares[j].getAttribute("col") &&
        gameBoard2PositionsHit[i][0] == gameBoard2Squares[j].getAttribute("row")
      ) {
        gameBoard2SquaresHit.push(gameBoard2Squares[j]);
      }
    }
  }
  gameBoard2SquaresHit.forEach((el) => el.classList.add("hit"));
}

function renderMissesToGameBoard1() {
  const gameBoard1Squares = document.querySelectorAll(
    "#gameboard-1 > .gameboard-square"
  );
  const gameBoard1PositionsMissed = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameBoard1.coordinates[i][j].isMissed) {
        gameBoard1PositionsMissed.push([i, j]);
      }
    }
  }

  const gameBoard1SquaresMissed = [];

  for (let i = 0; i < gameBoard1PositionsMissed.length; i++) {
    for (let j = 0; j < gameBoard1Squares.length; j++) {
      if (
        gameBoard1PositionsMissed[i][1] ==
          gameBoard1Squares[j].getAttribute("col") &&
        gameBoard1PositionsMissed[i][0] ==
          gameBoard1Squares[j].getAttribute("row")
      ) {
        gameBoard1SquaresMissed.push(gameBoard1Squares[j]);
      }
    }
  }
  gameBoard1SquaresMissed.forEach((el) => el.classList.add("missed"));
}

function renderHitsToGameBoard1() {
  const gameBoard1Squares = document.querySelectorAll(
    "#gameboard-1 > .gameboard-square"
  );
  const gameBoard1PositionsHit = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameBoard1.coordinates[i][j].isHit) {
        gameBoard1PositionsHit.push([i, j]);
      }
    }
  }

  const gameBoard1SquaresHit = [];

  for (let i = 0; i < gameBoard1PositionsHit.length; i++) {
    for (let j = 0; j < gameBoard1Squares.length; j++) {
      if (
        gameBoard1PositionsHit[i][1] ==
          gameBoard1Squares[j].getAttribute("col") &&
        gameBoard1PositionsHit[i][0] == gameBoard1Squares[j].getAttribute("row")
      ) {
        gameBoard1SquaresHit.push(gameBoard1Squares[j]);
      }
    }
  }
  gameBoard1SquaresHit.forEach((el) => el.classList.add("hit"));
}

function displayGameBoard2() {
  gameBoardContainer2.style.display = "grid";
  directions.textContent = "Game in progress...";
}

function removeGameBoard2() {
  gameBoardContainer2.style.display = "none";
  directions.textContent = "Place your 5 ships.";
}

export {
  renderShipsToGameBoard1,
  gameBoardContainer1,
  gameBoardContainer2,
  displayGameBoard2,
  removeGameBoard2,
};
