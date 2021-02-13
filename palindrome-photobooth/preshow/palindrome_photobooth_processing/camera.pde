//import library
import processing.video.*;

//declare the array to store the pictures
//ArrayList<PImage> pix = new ArrayList<PImage>();

//declare length of the array of pictures
int pixLength;

//declare boolean to display them forwards or backwards
boolean forwards;

//declare boolean to check if the pictures should be taken
boolean takePix;

//declare boolean to store if pictures have been taken or not
boolean picturesExist;

//declare integer to store the delay between pictures taken
int delayTime;

//declare integer to store the current pix displayed
int pixDisplayed;

//declare integer to store desired width
int desiredWidth;

//declare integer to store desired height
int desiredHeight;

//declare camera
Capture cam;

void setupCamera() {
  //retrieve list of available cameras
  String[] cameras = Capture.list();

  //set our camera to be the first one detected
  cam = new Capture(this, cameras[0]);

  println(cameras[0]);

  //start transmitting data from camera
  cam.start();
}

//function to check if camera is available
void readCamera() {
  cam.read();
  //scale the resolution of camera by half
  image(cam, 0, 0, desiredWidth, desiredHeight);
}
