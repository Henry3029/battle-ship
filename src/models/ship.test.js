import { Ship } from './ship'; 

test("let the hit count increase, when we can the hit() method", () => {
	const mShip = new Ship(3);
	myShip.hit();
	expect(myShip.damage).toBe(1);
	})