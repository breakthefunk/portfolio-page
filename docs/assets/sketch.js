stars = []
stars.length = 600;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
	//bg = loadImage("./assets/images/nebula,jpg");
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < stars.length; i++) {
		stars[i] = new Star();
	}
	button = createButton('WARP');
	button.position(width/2, height/2);
	button.mousePressed(warp);
}

function warp() {
		console.log("warp!");
		stars[i].speed = 50;
	}

function draw() {
    background(0);
    translate(width/2, height/2);
    for (i = 0; i  < stars.length; i++) {
    stars[i].show();
    stars[i].update();
    if(stars[i].show() === false) {
		stars.splice(i, 1);
		this.x = random(-width/2, width/2);
		this.y = random(-height/2, height/2);
        stars.push(new Star(this.x,this.y));
    }
  }
  if(frameCount % 100 == 0 ){
		randomStar = random(stars); 
		randomStar.shoot();
    }
}

class Star {
	constructor() {
	this.star();
    this.show();
 	}
  	star() {
        this.x = random(-width/2, width/2);
        this.y = random(-height/2, height/2);
        this.z = random(width);
        this.pz = this.z;
        this.alpha = 255;
        this.xmove = 0;
        this.ymove = 0;
        this.rng = floor(random(1,20));
        if (this.rng == 1) {
      	    this.color = 1;
        }
        else if (this.rng == 2) {
            this.color = 2;
        }
        else if (this.rng == 3 || this.rng == 4) {
            this.color = 3;
        }
        else if (this.rng == 5 || this.rng == 6) {
            this.color = 5;
        }
        else if (this.rng == 7 || this.rng == 8) {
            this.color = 6;
        }
        else if (this.rng == 9 || this.rng == 10) {
            this.color = 7;
        }
        else {
            this.color = 4;
        }
      
    }
  	show() {
        if(this.shooting) {;
			this.x += this.xmove;
			this.y += this.ymove;
			this.alpha -= 5;
  		}
        this.blink = random(1);
        if (this.color == 1 && this.blink > 0.05) {
			red = 255;
			green = 206;
            blue = 104;
        }
        else if (this.color == 2 && this.blink > 0.05) {
			red = 254;
			green = 210;
			blue = 163;
        }
		else if (this.color == 3 && this.blink > 0.05) {
			red = 254;
			green = 244;
			blue = 234;
        }
        else if (this.color == 4 && this.blink > 0.05) {
			red = 248;
			green = 247;
			blue = 255;
        }
        else if (this.color == 5 && this.blink > 0.05) {
			red = 202;
			green = 216;
			blue = 255;
        }  
  		else if (this.color == 6 && this.blink > 0.05) {
            red = 170;
            green = 191;
            blue = 255;
        }
        else if (this.color == 7 && this.blink > 0.05) {
            red = 155;
            green = 176;
            blue = 255;
        }
        else if (this.color <= 7 && this.blink < 0.05) {
            red = 0;
            green = 0;
            blue = 0;
        }
        fill(red, green, blue,this.alpha);
        noStroke();
        if(this.x > width || this.x < -width || this.y > height || this.y < -height) {
			return false;
        }
        this.nr = map(this.z, 0, width, 6, 0);
        ellipse(this.sx, this.sy, this.nr, this.nr);
  	}
  	update() {
    	this.speed = map(mouseX, 0, width, 0, 0);
	//this.speed = 0;
     	this.z = this.z - this.speed;
     	if (this.z < 0.5) {
      	this.z = random(width);
      	this.x = random(-width/2, width/2);
      	this.y = random(-height/2, height/2);
      	this.pz = this.z;
     	}
        this.sx = map(this.x/this.z, 0, 1, 0, width);
        this.sy = map(this.y/this.z, 0, 1, 0, height);
        this.pz = this.z;
    }
  	shoot() {
        this.shooting = true;
        this.xmove = random(-10,10); 
        this.ymove = random(-10,10);
    }
		
}
