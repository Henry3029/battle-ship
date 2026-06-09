import { GameBoard } from './gameBoard'; 
import { Ship } from './ship'; 

test("GameBoard should place ships at specific coordinates", () => {
  const myBoard = new GameBoard();
  myBoard.placeShip(0, 0, 3, "horizontal");
  
  // Notice the closing parenthesis right after the ["0,0"] bracket!
  expect(myBoard.shipPlaced["0,0"]).toBeInstanceOf(Ship); 
});