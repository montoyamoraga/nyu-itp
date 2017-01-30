//import osc libraries for communication
import oscP5.*;
import netP5.*;

//declare object for communication with max
OscP5 chuckData;
//receving port
int receivePort;

//boolean to check if there has
//been an incoming OSC message
boolean receivedOSC;

float value;


void setupOSC() {
  //set the receive port
  receivePort = 1234;
  //listen to incoming messages from max at port 1993 
  chuckData = new OscP5(this, 1234);
}

void oscEvent(OscMessage theOscMessage) {
  receivedOSC = true;
  receiveOSCProcessing(theOscMessage);
}

void receiveOSCProcessing(OscMessage theOscMessage) {

  if (theOscMessage.checkAddrPattern("conductor/downbeat")) {

    value = theOscMessage.get(0).floatValue();

    if (value > max) {
      max = value;
    } else if (value < min) {
      min = value;
    }
  }
}