import createShip from "../factories/ship";

const ship1 = createShip(5);

test("length of ship", () => {
  expect(ship1.length).toBe(5);
});
test("hit, (destroy part of the ship)", () => {
  ship1.hit(4);
  expect(ship1.body[4]).toBe(true);
});
test("is the ship sunken?", () => {
  ship1.hit(3);
  ship1.hit(2);
  ship1.hit(1);
  ship1.hit(0);
  expect(ship1.isSunk()).toBe(true);
});
