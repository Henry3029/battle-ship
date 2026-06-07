export class Ship {
	shipStat = {
		isSunk: false,
		timesSunk: 0,
		};
		
		constructor(_length) {
			this.length = _length;
			this.damage = 0;
			}
			
			hit() {
				this.damage += 1;
				}
	
	}