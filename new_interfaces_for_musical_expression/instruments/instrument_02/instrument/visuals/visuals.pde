
//choreographic interventions
//final project
//by yuli cai, aaron montoya donald shorter 
//april-may 2016

float max = 0.1;
float min = 0.0001;


//full screen width is 1440
void setup() {
  noCursor();
  //size(1280, 800, P3D);
  //size(600, 400, P3D);
  fullScreen();
  //size(80, 80);

  smooth();
  setupOSC();

}

void draw() {

  background(255-255*value/max,255-255*value/max, 255-255*value/max);

}