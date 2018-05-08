class Snake {
	constructor(gridSize) {
		this.size = [{"x" : 6, "y" : 6}, {"x" : 7, "y" : 6}, {"x" : 8, "y" : 6}, {"x" : 9, "y" : 6}];
		this.gridSize = gridSize;
	}
	show() {
		stroke(180, 120, 90);
		fill(250, 80, 80);
		rect(this.size[0].x * this.gridSize, this.size[0].y * this.gridSize, this.gridSize, this.gridSize);			
		for(var i = 1; i < this.size.length; i++) {
			stroke(150, 120, 90);
			fill(220, 80, 80);
			rect(this.size[i].x * this.gridSize, this.size[i].y * this.gridSize, this.gridSize, this.gridSize);			
		}
	}
	move(direction) {
		for(var i = this.size.length -1 ; i > 0; i--) {
			this.size[i].x = this.size[i - 1].x;
			this.size[i].y = this.size[i - 1].y;
		}
		this.size[0].x += direction.x;
		this.size[0].y += direction.y;
		if(this.size[0].x >= 32)
			this.size[0].x = 0;
		if(this.size[0].x < 0)
			this.size[0].x =32;
		if(this.size[0].y >= 24)
			this.size[0].y = 0;
		if(this.size[0].y < 0)
			this.size[0].y = 23;
	}
	eat(bait) {
		if( this.size[0].x == bait.x && this.size[0].y == bait.y ) {
			this.size.push({"x" : this.size[this.size.length - 1].x, 
							"y" : this.size[this.size.length - 1].y});
			return true;
		}
		return false;
	}
}