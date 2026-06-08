import { Ship } from './ship'; 

test("let the hit count increase, when we can the hit() method", () => {
	const myShip = new Ship(3);
	myShip.hit();
	expect(myShip.damage).toBe(1);
	})
	
// 2	
	test("when hit equal length, let isSunk be true", () => {
		const myShip = new Ship(3)
		myShip.isSunk();
		expect(shipStat.isSunk).toBe(true);
		})