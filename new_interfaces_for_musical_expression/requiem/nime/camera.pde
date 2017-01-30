import processing.video.*;

Capture externalCam;
Capture faceCam;

void setupCamera() {
  String[] cameras = Capture.list();

  //for (int i = 0; i < cameras.length; i++) {
  //  println(cameras[i]);
  //}
  println(cameras[9]);
  println(cameras[18]);

  // The camera can be initialized directly using an element
  // from the array returned by list():
  externalCam = new Capture(this, cameras[18]);
  //externalCam = new Capture(this, cameras[15]);
  //externalCam = new Capture(this, cameras[1]);
  //faceCam = new Capture(this, cameras[0]);
  faceCam = new Capture(this, cameras[9]);
  // Or, the settings can be defined based on the text in the list
  //cam = new Capture(this, 640, 480, "Built-in iSight", 30);

  // Start capturing the images from the camera
  externalCam.start();
  faceCam.start();
}

void getNewFrameCam() {
  if (externalCam.available() == true) {
    externalCam.read();
    faceCam.read();
  }
  //upper left
  image(externalCam, 0, 0, width/2, height/2);
  //image(externalCam, 0, 0, width/2, height);
  //upper right
  image(faceCam, width/2, 0, width/2, height/2);
  //image(faceCam, width/2, 0, width/2, height);
  //lower left
  image(faceCam, 0, height/2, width/2, height/2);
  //lower right
  image(externalCam, width/2, height/2, width/2, height/2);
  //add transparency
  tint(255, 126);
  // The following does the same as the above image() line, but 
  // is faster when just drawing the image without any additional 
  // resizing, transformations, or tint.
  //set(0, 0, cam);

  //to grayscale
  filter(GRAY);
  //less light areas
  filter(ERODE);
}