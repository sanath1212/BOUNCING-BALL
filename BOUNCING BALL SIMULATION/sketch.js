var x;
var y;
var time;
var weight;
var gravity;
var mass;
var speed;
var wind;
var pointx;
var pointy;
var xacc;
var x_final_velocity;
var friction;
var stop_wind;
var radius;

class entity {
  constructor() {
    this.radius = 20;
    this.x = Math.floor((Math.random() * (width - ((this.radius / 2) + 10))) + 1);
  	this.y = Math.floor((Math.random() * height / 9) + 1);
    this.time = 0;
    this.weight;
    this.gravity = 1;
    this.mass = 0.1;
    this.speed;
    this.wind = 0;
    this.pointx;
    this.pointy;
    this.xacc = 0;
    this.x_final_velocity = 0;
    this.friction = 0.001;
    this.stop_wind = 'START';
  }

    stop_wind_value() {
    	this.stop_wind = document.getElementById('stop_wind_value_value').value;
    }

		massvalue() {
			this.mass = document.getElementById('mass_value').value;
		}

		gravityvalue() {
			this.gravity = document.getElementById('gravity_value').value;
		}

		sizevalue() {
			this.size = document.getElementById('size_value').value;
		}

    gravity_physics() {
    	this.time++;
    	this.weight = this.gravity * this.mass;
      this.speed = this.weight * this.time;
    	this.y += this.speed;
    }

    wind_physics() {
    	if (this.stop_wind != 'STOP') {
    		this.pointx = random(width);
    		this.pointy = random(height);
    		if (this.pointx > this.pointy) {
    			this.wind += 0.001;
    		} else {
    			this.wind -= 0.001;
    		}
    	} else {
    		this.wind = 0;
    	}
    	this.x_final_velocity += this.wind;
    	this.x += this.x_final_velocity;
    }

    friction_physics() {
    	if (this.y > ((height - (this.radius / 2)) - 1.5)) {
    	    if (this.x_final_velocity < 0) {
    	      this.x_final_velocity += this.friction;
    	    }
    	    if (this.x_final_velocity > 0) {
    	      this.x_final_velocity -= this.friction;
    	    }
    	}
    }

    // collision_physics() {
    //
    // }

    edge() {
    	if (this.y > (height - ((this.radius / 2) + 1))) {
    		    this.time = this.time * -1;
    		    this.speed = this.weight * this.time;
    		    this.time -= this.speed;
    		    this.y += this.speed;
    	}

    	if (this.x > (width - (this.radius / 2))) {
    		this.x_final_velocity *= -1;
    	}

    	if (this.x <(this.radius / 2)) {
    		this.x_final_velocity *= -1;
    	}
    }

    display() {
      stroke(255, 0, 0, (255 / 1.5));
    	fill(255, 0, 0, (255 / 1.5));
    	ellipse(this.x, this.y, this.radius, this.radius);
    }
}
var no_of_entity = 100;
let new_entity = [];

function setup() {
	createCanvas(500, 500);
  for (var i = 0; i < no_of_entity; i++) {
    new_entity[i] = new entity();
  }
}

function draw() {
  background(240);
  for (var i = 0; i < no_of_entity; i++) {
    new_entity[i].gravity_physics();
    new_entity[i].wind_physics();
    new_entity[i].friction_physics();
		// new_entity[i].collision_physics();
    new_entity[i].edge();
    new_entity[i].display();
  }
  stop_wind_value();
  massvalue();
  gravityvalue();
  sizevalue();
}
