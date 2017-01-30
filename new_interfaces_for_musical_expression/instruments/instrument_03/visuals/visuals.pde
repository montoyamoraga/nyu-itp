//nyu itp
//new interfaces for musical expression
//for processing 3.x
//september 2016
//code by aaron montoya-moraga

float max = 0.1;
float min = 0.0001;

float x1, y1;
float x2, y2;
float diameter1, diameter2;

float counter, step;

float deviation = 0;

boolean sideways = false;
boolean fast = false;

//full screen width is 1440
void setup() {
  noCursor();
  fullScreen();

  smooth();
  setupOSC();

  fill(255, 50);
  noStroke();

  diameter1 = width/5;
  diameter2 = width/5;

  counter = 0;
  step = 0.01;

  background(0, 0, 0);
  
  frameRate(60);
}

void draw() {
  
  checkRoll();
  checkAcceleration();
  
  if (sideways) {
    fill(0, 0, 0, 100);
  } else {
    fill(0, 0, 0, 1);
  }
  rect(0, 0, width, height);
    
  

  deviation = noise(counter)*2-1;

  x1 = 2 * width/3  + deviation *  width/2*sin(counter);

  x2 = 1 * width/3  + deviation *  width/2*sin(counter);

  y1 = 1 * height/2 + deviation * (height/2)*cos(counter);

  y2 = 1 * height/2 - deviation * (height/2)*cos(counter);

  
  
  if (fast) {
    diameter1= diameter1+20;
    diameter2= diameter2+20;
  }
  else {
    diameter1= diameter1-5;
    diameter2= diameter2-5;
  }

  fill(255, 255, 255*noise(counter), 200); 
  ellipse(x1, y1, diameter1, diameter1);

  fill(255, 255, 255-255*noise(counter), 200); 
  ellipse(x2, y2, diameter2, diameter2);

  counter = counter + step;
}

void checkRoll() {
  
  if (roll > 0.6) {
    sideways = true;
  } else {
    sideways = false;
  }
  
}

void checkAcceleration() {
  if (acceleration > 0.5) {
    fast = true;
  }
  else {
    fast = false;
  }
}