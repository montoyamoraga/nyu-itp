//requiem
//by aaron montoya moraga
//december 2016
//runs on processing 3.2.3
//on a macbook pro
//v0.2.2

int startTime;
int endTime;

void settings() {
  size(1040, 510, P3D);
  //size(700, 700, P3D);
  //size(400, 400, P3D);
  //fullScreen();
  PJOGL.profile = 1;
}

//setup() runs once after settings()
void setup() {
  noCursor();
  //setupSyphon();
  setupOsc();
  sendInitialOscMessage();
  setupCamera();
  setupText();
  startTime = millis();
}

//draw() runs on a loop after setup()
void draw() {
  background(0);
  //getNewSyphonFrame();
  getNewFrameCam();
  displayText();
}