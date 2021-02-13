//#define CAMERA_FLASH_PIN 4
int timer = 150;

//arduino pin variables
int firstPin = 23;
int lastPin = 50;

void setup()
{

  //open serial port
  Serial.begin(9600);

  setupPins();

  //pinMode(CAMERA_FLASH_PIN, OUTPUT);
  //digitalWrite(CAMERA_FLASH_PIN, LOW); 
}

void setupPins() {
   //define output pins
    for (int i = firstPin; i < lastPin; i++) {
        pinMode(i, OUTPUT);
        digitalWrite(i, LOW);
  }
}

void loop() {
    int cmd;
    while (Serial.available() > 0)
       {
        int cmd = Serial.read();
        switch (cmd)
          {
            case ' ':
                {
                    for (int thisPin = 23; thisPin < 50; thisPin++) {
                        // turn the pin on:
                        digitalWrite(thisPin, LOW);
                        delay(timer);
                        // turn the pin off:
                        digitalWrite(thisPin, HIGH);
          }
                default:
                    {
                        Serial.println("Press the spacebar to trigger the flash");
          }
        } 
    }
  }
}
