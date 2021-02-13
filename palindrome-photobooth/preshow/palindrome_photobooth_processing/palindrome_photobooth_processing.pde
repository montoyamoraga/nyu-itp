//palindrome photobooth
//sketch for processing 3.x
//by aaron parsekian, andy sahlstrom, aaron montoya-moraga

//settings allows to set the canvas size
//with variables instead of fixed numbers
void settings() {

  //set up initial states
  setupVariables();

  //size of the canvas
  size(desiredWidth, desiredHeight);
}

void setup() {

  //size of the canvas
  //size(desiredWidth, desiredHeight);

  //setup the variables
  //setupVariables();

  //setup camera
  setupCamera();

  // List all the available serial ports:
  printArray(Serial.list());

  // Open the port you are using at the rate you want:
  myPort = new Serial(this, Serial.list()[4], 9600);
}

void draw() {
  //readSerial();
  decisionSerial();
  takePix();
  displayPix();
  
}

void takePix() {

  //if takePix is true, 
  if (takePix) {
    getDate();
    picturesExist = true;
    //fill the pix array
    fillPix();
    //we set takePix back to false
    takePix = false;
  }
}

void displayPix() {
  if (picturesExist) {
    displayNext();
  }
}

void setupVariables() {
  //length of the array of pictures
  pixLength = 27;

  //boolean to display them forwards or backwards
  forwards = true;

  //boolean to check if the pictures should be taken
  takePix = false;

  //boolean to store if pictures have been taken or not
  picturesExist  = false;

  //integer to store the delay between pictures taken
  delayTime = 200;

  //integer to store the current pix displayed
  pixDisplayed = 0;

  //integer to store desired width
  desiredWidth = 640;

  //integer to store desired height
  desiredHeight = 360;
}

//function triggered when a key is pressed
//void keyPressed() {
//  //detect spacebar
//  //make takePix true so that
//  //we take pictures
//  if (key == ' ') {
//    takePix = true;
//  }
//}