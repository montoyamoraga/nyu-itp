//palindrome photobooth
//sketch for arduino mega

//define the arduino pin
//where the pushbutton is connected
int buttonPin = 10;

int currentCounter;
int lastCounter;
int difference;

//define the timer
int timer = 200;

//arduino pin variables
int firstPin = 22;
int lastPin = 50;

int delayLightsFiring = 600;

int cmd;

void setup()
{

  //open serial port
  Serial.begin(9600);

  pinMode(buttonPin, INPUT);
  initCounter();

  setupPins();
}

void setupPins() {
   //define output pins
    for (int i = firstPin; i < lastPin; i++) {
        pinMode(i, OUTPUT);
        digitalWrite(i, LOW);
  }
}

void loop() {

  updateCounter();
  sendToProcessing();
}

void initCounter() {
  currentCounter = 0;
  lastCounter = 0;
}

void updateCounter() {
  lastCounter = currentCounter;
  if (digitalRead(buttonPin) == HIGH) {
    currentCounter = currentCounter + 1;
  }
}

void triggerLights() {
  delay(delayLightsFiring);
  for (int i = firstPin; i < lastPin; i++) {
    // turn the pin on:
    digitalWrite(i, LOW);
    delay(timer);
    // turn the pin off:
    digitalWrite(i, HIGH);
  }
}


void sendToProcessing() {

  difference = abs(currentCounter - lastCounter);

  if (difference > 0) {
    Serial.println("1");
    triggerLights();
  }
  else {
    Serial.println("0");
  }
}

