import { GameBoard } from './gameBoard'; 
import { Ship } from './ship'; 

test("GameBoard should place ships at specific coordinates", () => {
  const myBoard = new GameBoard();
  myBoard.placeShip(0, 0, 3, "horizontal");
  
  // Notice the closing parenthesis right after the ["0,0"] bracket!
  expect(myBoard.shipPlaced["0,0"]).toBeInstanceOf(Ship); 
});


test("GameBoard should receive an attack and send the hit to the correct ship", () => {
  // 1. Arrange: Set up a board and place a ship on it
  const myBoard = new GameBoard();
  
  // Place a ship of length 3 horizontally at (0, 0)
  // This occupies "0,0", "0,1", and "0,2"
  myBoard.placeShip(0, 0, 3, 'horizontal');

  // Grab a direct reference to that ship so we can check its health later
  const targetedShip = myBoard.shipPlaced["0,1"];

  // 2. Act: Send an attack to one of the ship's coordinates
  myBoard.receiveAttack(0, 1);

  // 3. Assert: Verify the target ship actually absorbed the hit!
  // If your ship starts with 0 damage, hitting it should make its damage exactly 1
  expect(targetedShip.damage).toBe(1);
});

test("GameBoard should be able to report whether or not all ships have been sunk", () => {
    const myBoard = new GameBoard();
    
    // 1. Place a small ship on the board (e.g., a Destroyer of length 2 at row 0, col 0)
    // Assuming your method looks something like placeShip(row, col, length, orientation)
    myBoard.placeShip(0, 0, 2, "horizontal");
    
    // 2. Assert that the board says FALSE initially (because the ship is still alive)
    expect(myBoard.allShipsSunk()).toBe(false);
    
    // 3. Attack the ship coordinates to sink it
    myBoard.receiveAttack(0, 0); // First hit
    myBoard.receiveAttack(0, 1); // Second hit (Sunk!)
    
    // 4. NOW expect it to be true!
    expect(myBoard.allShipsSunk()).toBe(true);
}); // <-- FIXED: Added missing closing parenthesis for the test block