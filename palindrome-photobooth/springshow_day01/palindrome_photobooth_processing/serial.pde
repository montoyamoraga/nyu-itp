//serial communication based on 
//the work by tom igoe at 
//https://www.arduino.cc/en/Tutorial/Graph

import processing.serial.*;

// The serial port:
Serial myPort;       
float inByte = 0;

//void readSerial() {
//  while (myPort.available() > 0) {
//    inBuffer = myPort.readString();   
//    if (inBuffer != null) {
//      println(inBuffer);
//    }
//  }
//}

void decisionSerial() {
  //detect spacebar
  //make takePix true so that
  //we take pictures
  if (inByte == 1.0) {
    takePix = true;
  }
}

void serialEvent (Serial myPort) {
  // get the ASCII string:
  String inString = myPort.readStringUntil('\n');

  if (inString != null) {
    // trim off any whitespace:
    inString = trim(inString);
    // convert to an int and map to the screen height:
    inByte = float(inString);
    println(inByte);
  }
}