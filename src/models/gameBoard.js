import { Ship } from './ship'; 

export class GameBoard {
  constructor() {
    this.shipPlaced = {};
  }
    
  placeShip(row, col, length, orientation) {
    const myShip = new Ship(length);
    
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal') {
        // Fixed: Added the closing backtick right before the closing bracket
        this.shipPlaced[`${row},${col + i}`] = myShip; 
      } else if (orientation === 'vertical') {
        // Fixed: Added the closing backtick right before the closing bracket
        this.shipPlaced[`${row + i},${col}`] = myShip; 
      }
    }
  }
}