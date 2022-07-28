import createShip from "../factories/ship";
import createPlayer from "../factories/player";
import createGameBoard from "../factories/gameBoard";

let player;
let gameBoard;
let ship;

beforeEach(() => {
  player = createPlayer("p1");
  gameBoard = createGameBoard();
  gameBoard.intialize();
  ship = createShip(3);
});

test("creates and initializes an object", () => {
  expect(player.name).toBe("p1");
});

test("players take turn by attacking enemy gameboard", () => {
  gameBoard.placeShip(3, [1, 1]);
  player.attack([1, 1], gameBoard);
  expect(player.isTurn).toBeFalsy();
});

test("Make computer players (AI) make random 'legal' plays", () => {
  gameBoard.placeShip(5, [1, 1]);
  for (let i = 0; i < 100; i++) {
    player.randomlyAttack(gameBoard);
  }
  expect(gameBoard.allShipsSunk()).toBe(true);
});
