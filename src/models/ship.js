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
	
/*	isSunk() {
		if(this.damage >= this.length) {
			this.shipStat.isSunk = true;
			this.shipStat.timesSunk += 1;
			console.log("The Ship Has been Sunk congrats!.");
			return true;
			} else {
				console.log("The Ship Is Still Alive!");
				return false;
				}
		}
		*/
	}
	