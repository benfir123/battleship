import createPlayer from "./factories/player";
import createGameBoard from "./factories/gameBoard";
import createGrid from "./createGrid";
import takeShipInput from "./placeShips";

let gameBoard1;
let gameBoard2;
let player1;
let player2;

export default function startGame() {
  player1 = createPlayer("p1");
  player2 = createPlayer("p2");

  gameBoard1 = createGameBoard();
  gameBoard2 = createGameBoard();

  gameBoard1.intialize();
  gameBoard2.intialize();

  gameBoard2.placeShipsRandomly();
}

function resetGame() {
  gameBoard1 = {};
  gameBoard2 = {};
  player1 = {};
  player2 = {};

  createGrid();
  takeShipInput(5);
  startGame();
}

export { gameBoard1, gameBoard2, player1, player2, resetGame };
