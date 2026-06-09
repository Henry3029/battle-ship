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
        // Fixed: Added the closing backtick right before the closing bracket
        this.shipPlaced[`${row},${col + i}`] = myShip; 
      } else if (orientation === 'vertical') {
        // Fixed: Added the closing backtick right before the closing bracket
        this.shipPlaced[`${row + i},${col}`] = myShip; 
      }
    }
  }
}

receiveAttack(row, col) {
	const key = `${row},${col}`;
	const targetShip = this.shipPlaced[key];
	if(targetShip) {
		targetShip.hit()
		} else {
			this.missedShots.push(key);
			}
	}