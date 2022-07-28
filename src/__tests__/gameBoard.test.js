import gameBoard, { ship1 } from "../factories/gameBoard";
const gameBoard1 = gameBoard();
gameBoard1.intialize();
test("Place ship at specific coordinates", () => {
  gameBoard1.placeShip(2, [4, 4]);
  expect(
    gameBoard1.coordinates[4][4].hasShip && gameBoard1.coordinates[4][5].hasShip
  ).toBeTruthy();
  expect(
    gameBoard1.coordinates[0][4].hasShip && gameBoard1.coordinates[0][5].hasShip
  ).toBeFalsy();
});

test("take coordinates and determine attack hit()", () => {
  gameBoard1.receiveAttack([4, 4]);
  expect(gameBoard1.coordinates[4][4].isHit).toBeTruthy();
  expect(gameBoard1.coordinates[8][8].isHit).toBeFalsy();
  expect(ship1.body[0]).toBeTruthy();
  expect(ship1.body[1]).toBeFalsy();
});

test("take coordinates and determine attack miss", () => {
  gameBoard1.receiveAttack([3, 4]);
  expect(gameBoard1.coordinates[3][4].isMissed).toBeTruthy();
});

test("have all ships been sunk?", () => {
  gameBoard1.receiveAttack([4, 5]);
  expect(gameBoard1.allShipsSunk()).toBeTruthy();
});
