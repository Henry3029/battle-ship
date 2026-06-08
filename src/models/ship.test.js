import { Ship } from './ship'; 

test("let the hit count increase, when we can the hit() method", () => {
	const myShip = new Ship(3);
	myShip.hit();
	expect(myShip.damage).toBe(1);
	})
	
// 2	
	test("a ship of length three goes down after been fired three times", () => {
		const myShip = new Ship(3);
		
		expect(myShip.isSunk()).toBe(false);
		
		myShip.hit();
		expect(myShip.isSunk()).toBe(false);
		
		myShip.hit();
		expect(myShip.isSunk()).toBe(false);
		
		myShip.hit();
		expect(myShip.isSunk()).toBe(true);
		
		})
		