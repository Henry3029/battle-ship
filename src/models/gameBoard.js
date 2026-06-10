import { Ship } from './ship'; 

export class GameBoard {
  constructor() {
    this.shipPlaced = {};
    this.missedShots = [];
    this.ships = [];
  }
    
  placeShip(row, col, length, orientation) {
    const myShip = new Ship(length);
    
    this.ships.push(myShip);
    
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
    if(this.missedShots.includes(key)) return "Already miss here"
    const targetShip = this.shipPlaced[key];
    
    if (targetShip) {
      targetShip.hit();
    } else {
      this.missedShots.push(key);
    }
  } // Closes receiveAttack
  
  allShipsSunk() {
  	if(this.ships.length === 0) return false; // no ship has been placed.
  
  for(let i = 0; i < this.ships.length; i++) {
  	if(this.ships[i].damage < this.ships[i].length) {
  console.log("One Ship is Still Floating");
  return false; 
  }
  
  // if the loop check the whole ship,  and they are all busted.
  return true;
  	}
  
  
  	}
  
  
  
  
  

} // FIXED: This final brace closes the entire GameBoard class