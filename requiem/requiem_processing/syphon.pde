//import syphon library
import codeanticode.syphon.*;

//declare variable for current frame
PImage img;
//declare variable of syphon client
SyphonClient client;

void setupSyphon() {
  // Create syhpon client to receive frames 
  // from the first available running server: 
  client = new SyphonClient(this);
  //SyphonClient.listServers();
}

void getNewSyphonFrame() { 

  if (client.newFrame()) {
    // The first time getImage() is called with 
    // a null argument, it will initialize the PImage
    // object with the correct size.
    img = client.getImage(img); // load the pixels array with the updated image info (slow)
    //img = client.getImage(img, false); // does not load the pixels array (faster)
  }
  if (img != null) {
    image(img, 0, 0, width, height);
    println("yay");
  }
}