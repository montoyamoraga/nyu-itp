import gifAnimation.*;
import processing.opengl.*;

GifMaker gifExport;
PImage logo;
float rotation = 0.0;
String begin = "./example/";
String end = ".jpg";

int numberPix = 27;
int currentPix = 0;

boolean isFinished = false;
boolean forwards = true;

void setup() {
  size(640, 360, OPENGL);
  frameRate(12);
  println("gif animation" + Gif.version());
  gifExport = new GifMaker(this, "export1.gif");
  gifExport.setRepeat(0);
}


void draw() {

  if (isFinished) {
    gifExport.finish();
    println("gif saved");
    isFinished = true;
  } else {

    logo = loadImage(begin + currentPix + end);
    image(logo, 0, 0);
    gifExport.setDelay(1);
    gifExport.addFrame();

    if (forwards) {
      currentPix = currentPix + 1;
      if (currentPix == numberPix) {
        forwards = false;
        currentPix = currentPix - 1;
      }
    } else {
      currentPix = currentPix - 1;
      if (currentPix == 0) {
        isFinished = true;
      }
    }
  }
}

