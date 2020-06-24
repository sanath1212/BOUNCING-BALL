let x;
let y;
let size = 20;
let gravity = 1;
let time = 0;
let speed = 0;
let mass = 0.1;
let wind_speed = 0;
let drag = 100;

function setup() {
	createCanvas(800,  500);
	x = (width / 2);
	y = (size / 2);
}

function draw() {
	print(y);
	background(240);

	gravity_physics();
	if (mouseIsPressed) {
		wind_physics_user();
	}
	wind_physics();	
	drag_physics();	

	stroke(255, 0, 0, (255 / 1.5));
	fill(255, 0, 0, (255 / 1.5));
	ellipse(x, y, size, size);
}

function massvalue() {
	mass = document.getElementById('mass_value').value;
}

function gravityvalue() {
	gravity = document.getElementById('gravity_value').value;
}

function sizevalue() {
	size = document.getElementById('size_value').value;
}

function gravity_physics() {
	time++;
	weight = gravity * mass;
    speed = weight * time;
    y += speed;
    edge();
}

function wind_physics() {
	x += wind_speed;
	edge();
}

function wind_physics_user() {
	wind_speed += -1;
	x += wind_speed;
	edge();
}

function drag_physics() {
	speed -= drag;
	time++;
	weight = gravity * mass;
	speed = weight * time;
	edge();
}

function friction_physics() {

	
}

function edge() {
	if (y > (height - (size / 2))) {
		    time = time * -1;
		    speed = weight * time;
		    time -= speed;
		    y += speed;
		}

		if (x > (width - (size / 2))) {
			time = time * -1;
			wind_speed *= -1;
			time = time * -1;
		    speed = weight * time;
		    time -= speed;
		}

		if (x <(size / 2)) {
			time = time * -1;
			wind_speed *= -1;
			time = time * -1;
		    speed = weight * time;
		    time -= speed;
		}
}
