export default function createShip(length) {
  return {
    body: new Array(length).fill(false),
    length: length,
    hit(number) {
      this.body[number] = true;
    },
    isSunk() {
      return this.body.every((block) => block === true) ? true : false;
    },
  };
}
