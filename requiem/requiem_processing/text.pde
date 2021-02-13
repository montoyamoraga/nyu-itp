//text variables for size
float largeTextSize;
float smallTextSize;
float maxTextSize;
float minTextSize;
float stepUpTextSize;
float stepDownTextSize;

int numberSection = 0;

PFont myFont;

//setupText() takes care of the initialization
//of text related variables
void setupText() {
  textAlign(CENTER);
  strokeWeight(5);
  maxTextSize = 42;
  minTextSize = 2;
  largeTextSize = 20;
  smallTextSize = 10;
  stepUpTextSize = 1.3;
  stepDownTextSize = 0.7;
  //String[] fontList = PFont.list();
  //printArray(fontList);

  myFont = createFont("Helvetica", 80);
  textFont(myFont);

  rectMode(CENTER);
}

//biggerText() returns a bigger text size
float biggerText(float currentTextSize) {
  float updatedTextSize = currentTextSize * stepUpTextSize;
  if (updatedTextSize > maxTextSize) {
    return maxTextSize;
  } else {
    return updatedTextSize;
  }
}

//smallerText() returns a smaller text size
float smallerText(float currentTextSize) {
  float updatedTextSize = currentTextSize * stepDownTextSize;
  if (updatedTextSize < minTextSize) {
    return minTextSize;
  } else {
    return updatedTextSize;
  }
}


void displayText() {
  int stringLength = 0;
  if (textReceived != null) {
    stringLength = textReceived.length();
    int widthCanvas = width;
    int charSize = widthCanvas/stringLength;
    //float stringSize = map(stringLength, 0, 100, 80, 30);
    float sizeWeight = 1.8;
    textSize(sizeWeight*charSize);
    //textSize(stringSize);
    text(textReceived, width/2, height/2);
  }
}

//void introText() {
//  //println(millis()-startTime);
//  if (millis()-startTime < 10000) {
//    textSize(maxTextSize);
//    text(welcome0, width/2, 1*height/5);
//  } else if (millis()-startTime < 15000) { 
//    text(welcome0, width/2, 1*height/5);
//    text(welcome1, width/2, 2*height/5);
//  } else if (millis()-startTime < 20000) { 
//    text(welcome0, width/2, 1*height/5);
//    text(welcome1, width/2, 2*height/5);
//    text(welcome2, width/2, 3*height/5);
//  } else if (millis()-startTime < 25000) { 
//    text(welcome0, width/2, 1*height/5);
//    text(welcome1, width/2, 2*height/5);
//    text(welcome2, width/2, 3*height/5);
//    text(welcome3, width/2, 4*height/5);
//  }
//}

void detectionPresent(String name, String detail) {
  fill(255);
  stroke(0);
  largeTextSize = biggerText(largeTextSize);
  smallTextSize = biggerText(smallTextSize);
  textSize(largeTextSize);
  text(name, width/2, 7*height/10);
  textSize(smallTextSize);
  text(detail, width/2, 8*height/10);
}

void detectionGone(String name, String detail) {
  fill(255);
  stroke(0);
  largeTextSize = smallerText(largeTextSize);
  smallTextSize = smallerText(smallTextSize);
  textSize(largeTextSize);
  text(name, width/2, 7*height/10);
  textSize(smallTextSize);
  text(detail, width/2, 8*height/10);
  endTime = millis();
}

//void endText() {

//  if (millis()-endTime < 3000) {
//    textSize(maxTextSize);
//    text(dedicated0, width/2, 1*height/5);
//  } else if (millis()- endTime < 8000) { 
//    text(dedicated0, width/2, 1*height/5);
//    text(dedicated1, width/2, 2*height/5);
//  } else if (millis()- endTime < 11000) { 
//    text(dedicated0, width/2, 1*height/5);
//    text(dedicated1, width/2, 2*height/5);
//    text(dedicated2, width/2, 3*height/5);
//  } else if (millis()- endTime < 16000) { 
//    text(dedicated0, width/2, 1*height/5);
//    text(dedicated1, width/2, 2*height/5);
//    text(dedicated2, width/2, 3*height/5);
//    text(dedicated3, width/2, 4*height/5);
//  }
//}