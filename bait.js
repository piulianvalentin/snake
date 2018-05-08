class Bait {
	constructor(location, gridSize) {
		this.location = location;
		this.gridSize = gridSize;
	}
	show() {
		noStroke();
		fill(220, 40, 40);
		rect(this.location.x * this.gridSize, this.location.y * this.gridSize, this.gridSize, this.gridSize);	
	}
	getLocation(){
		return this.location;
	}
}