import { gameBoard1 } from "./game";
import render, { displayGameBoard2 } from "./render";

const shipLengths = [5, 4, 3, 3, 2, undefined];
let counter = 0;

export default function takeShipInput(shipLength) {
  const squares = document.querySelectorAll("#gameboard-1 > .gameboard-square");
  squares.forEach((square) => {
    square.removeEventListener("mouseover", square._makeHoverable);
    square.removeEventListener("mouseout", square._removeHover);
    square.removeEventListener("click", square._makeClickable);
  });
  if (!shipLength) {
    displayGameBoard2();
    counter = 0;
    return;
  }
  squares.forEach((square) => {
    square.addEventListener(
      "mouseover",
      (square._makeHoverable = (e) => {
        const x = e.target.getAttribute("row");
        const y = e.target.getAttribute("col");
        if (+y + (shipLength - 1) < 10) {
          for (let i = 0; i < shipLength; i++) {
            const square = document.querySelector(
              `[row="${x}"][col="${+y + i}"]`
            );
            square.classList.add("hover");
          }
        }
      })
    );
    square.addEventListener(
      "mouseout",
      (square._removeHover = (e) => {
        const x = e.target.getAttribute("row");
        const y = e.target.getAttribute("col");
        if (+y + (shipLength - 1) < 10) {
          for (let i = 0; i < shipLength; i++) {
            const square = document.querySelector(
              `[row="${x}"][col="${+y + i}"]`
            );
            square.classList.remove("hover");
          }
        }
      })
    );
    square.addEventListener(
      "click",
      (square._makeClickable = (e) => {
        const x = e.target.getAttribute("row");
        const y = e.target.getAttribute("col");
        if (+y + (shipLength - 1) < 10) {
          if (!gameBoard1.hasShipAlready(+x, +y, shipLength)) {
            gameBoard1.placeShip(shipLength, [+x, +y]);
            render();
            counter++;
            takeShipInput(shipLengths[counter]);
          }
        }
      })
    );
  });
}
