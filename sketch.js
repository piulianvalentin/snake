var snake, bait = [];
var settings = {};
var grid = [[]];
settings.direction = {
	"x" : 0,
	"y" : 0
}
settings.speed = 1;
settings.grid = 25;


function setup() {
	bait.push(new Bait({"x" : 15, "y" : 10}, settings.grid)); 
	snake = new Snake(settings.grid);
	createCanvas(800, 600);
	frameRate(7);
}
function draw() {
	background(100, 100, 100);
	snake.show();
	snake.move(settings.direction);
	bait[0].show();
	if( snake.eat(bait[0].getLocation()) ) {
		bait.shift();
		bait.push(new Bait({"x" : 20, "y" : 15}, settings.grid));
	}

}



function keyPressed(){
	if( keyCode == LEFT_ARROW ) {
		if(settings.direction.x != 1)
			settings.direction.x = -1 * settings.speed;
		settings.direction.y = 0;
		console.log(settings.direction);
	}
	if( keyCode == RIGHT_ARROW ) {
		if(settings.direction.x != -1)
			settings.direction.x = 1 * settings.speed;
		settings.direction.y = 0;
		console.log(settings.direction);
	}
	if( keyCode == UP_ARROW ) {
		settings.direction.x = 0;
		if(settings.direction.y != 1)
			settings.direction.y = -1 * settings.speed;
		console.log(settings.direction);
	}
	if( keyCode == DOWN_ARROW ) {
		settings.direction.x = 0;
		if(settings.direction.y != -1)
			settings.direction.y = 1 * settings.speed;
		console.log(settings.direction);
	}
}