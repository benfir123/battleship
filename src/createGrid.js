import render, {
  gameBoardContainer1,
  gameBoardContainer2,
  removeGameBoard2,
} from "./render";
import { gameBoard1, gameBoard2, player1, player2, resetGame } from "./game";

export default function createGrid() {
  removeGameBoard2();
  createSquaresOnBoard();
  makeSquaresClickable();
}

function createSquaresOnBoard() {
  gameBoardContainer1.innerHTML = "";
  gameBoardContainer2.innerHTML = "";

  let rowCounter = -1;

  for (let i = 0; i < 100; i++) {
    const gameBoardSquare = document.createElement("div");
    gameBoardContainer1.appendChild(gameBoardSquare);

    if (i % 10 === 0) {
      rowCounter++;
    }
    gameBoardSquare.setAttribute("row", `${rowCounter}`);
    gameBoardSquare.setAttribute("col", `${i % 10}`);

    gameBoardSquare.classList.add("gameboard-square");
  }
  rowCounter = -1;

  for (let i = 0; i < 100; i++) {
    const gameBoardSquare = document.createElement("div");
    gameBoardContainer2.appendChild(gameBoardSquare);

    if (i % 10 === 0) {
      rowCounter++;
    }
    gameBoardSquare.setAttribute("row", `${rowCounter}`);
    gameBoardSquare.setAttribute("col", `${i % 10}`);

    gameBoardSquare.classList.add("gameboard-square");
  }
}
function makeSquaresClickable() {
  const gameBoard2Squares = document.querySelectorAll(
    "#gameboard-2 > .gameboard-square"
  );
  gameBoard2Squares.forEach((square) =>
    square.addEventListener("click", makeMove)
  );
}

function makeMove(e) {
  if (
    player1.isTurn &&
    !e.target.classList.contains("hit") &&
    !e.target.classList.contains("missed")
  ) {
    let x = e.target.getAttribute("row");
    let y = e.target.getAttribute("col");
    player1.attack([x, y], gameBoard2);
    render();
    if (gameBoard2.allShipsSunk()) {
      alert("player1 Wins");
      resetGame();
      return;
    }
    player1.isTurn = false;
    setTimeout(() => {
      player2.randomlyAttack(gameBoard1);
      player1.isTurn = true;
      render();
      if (gameBoard1.allShipsSunk()) {
        alert("player2 Wins");
        resetGame();
        return;
      }
    }, 0);
  }
}
