//import osc libraries for communication
import oscP5.*;
import netP5.*;

//declare object for communication with max
OscP5 maxData;
//receving port
int receivePort;

//boolean to check if there has
//been an incoming OSC message
boolean receivedOSC;

float value;
float acceleration;
float pitch, roll, yaw;

void setupOSC() {
  //set the receive port
  receivePort = 1234;
  //listen to incoming messages from max at port 2005
  maxData = new OscP5(this, 2450);
}

void oscEvent(OscMessage theOscMessage) {
  receivedOSC = true;
  receiveOSCProcessing(theOscMessage);
}

void receiveOSCProcessing(OscMessage theOscMessage) {

  if (theOscMessage.checkAddrPattern("/amplitude")) {

    value = theOscMessage.get(0).floatValue();

    if (value > max) {
      max = value;
    } else if (value < min) {
      min = value;
    }
  }   else if (theOscMessage.checkAddrPattern("/acceleration")) {

    acceleration = theOscMessage.get(0).floatValue();
    step = acceleration;

  }  else if (theOscMessage.checkAddrPattern("/pitch")) {

    pitch = theOscMessage.get(0).floatValue();

  }  else if (theOscMessage.checkAddrPattern("/roll")) {

    roll = theOscMessage.get(0).floatValue();

  }  else if (theOscMessage.checkAddrPattern("/yaw")) {

    yaw = theOscMessage.get(0).floatValue();

  }
}