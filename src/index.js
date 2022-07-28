import "./style.css";
import createGrid from "./createGrid";
import startGame from "./game";
import takeShipInput from "./placeShips";

createGrid();
takeShipInput(5);
startGame();
