import { Ship } from './ship'; 

export class GameBoard {
  constructor() {
    this.shipPlaced = {};
    this.missedShots = [];
  }
    
  placeShip(row, col, length, orientation) {
    const myShip = new Ship(length);
    
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal') {
        this.shipPlaced[`${row},${col + i}`] = myShip; 
      } else if (orientation === 'vertical') {
        this.shipPlaced[`${row + i},${col}`] = myShip; 
      }
    }
  } // Closes placeShip

  // FIXED: This is now correctly positioned inside the GameBoard class
  receiveAttack(row, col) {
    const key = `${row},${col}`;
    if(this.missedShot.includes(key)) return "Already miss here"
    const targetShip = this.shipPlaced[key];
    
    if (targetShip) {
      targetShip.hit();
    } else {
      this.missedShots.push(key);
    }
  } // Closes receiveAttack

} // FIXED: This final brace closes the entire GameBoard class