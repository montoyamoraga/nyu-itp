//final exam for nyu itp class
//designing for live performance
//taught by andrew lazarow
//by aaron montoya-moraga
//december 2016

//import processing library
import codeanticode.syphon.*;

int backgroundColor = 0;

int counterGlobal = -1;
int counterQuestions = -1;
int counterAnswers = -1;

String[] questions = {"What is your wife's name?", 
  "Who did the Panthers beat on their latest game?", 
  "How old is Charlie Klein aka Charles BARKley?", 
  "How many Facebook friends and followers do you have?", 
  "Where were you on December 2nd 2016 at 4:06pm?", 
  "What do you know about Walt Fieger?"};

String[] answers = {"a) Dana b) Stephanie c) Ivanka", 
  "San Diego Chargers by 28-16", 
  "7 years old", 
  "112 followers and 1,729 friends", 
  "Minneapolis, Minnesota", 
  "finally fully retired this past year! teacher for 40 years; married 40 years to my wonderful wife Sharon; 2 beautiful daughters- Kelly and Stephanie, 2 grandsons-Erik and Logan; a new granddaughter Olivia Ryan! love Ocean city, NJ my favorite place in the whole wide world!!mYoungest daughter, Stephanie, is marrying her long time partner/fiancee Ben, Feb. 12, in Charleston, SC!"};

//declare PGraphics object for canvas
PGraphics canvas;

PFont myFont;

//declare SyphonServer object
SyphonServer server;

//settings() is the first function to be executed
void settings() {
  //define size of the canvas
  size(800, 800, P3D);
  PJOGL.profile=1;
}

//setup()gets executed right after settings()
void setup() { 
  //create buffer for the canvas
  canvas = createGraphics(800, 800, P3D);
  canvas.beginDraw();
  canvas.textAlign(CENTER);
  canvas.strokeWeight(5);
  canvas.background(backgroundColor);
  myFont = createFont("Helvetica", width/30);
  canvas.textFont(myFont);
  canvas.endDraw();

  // Create syhpon server to send frames out.
  server = new SyphonServer(this, "Processing Syphon");
}

//draw() gets executed in a loop right after setup()
void draw() {
  //canvas.beginDraw();
  //canvas.background(random(255));

  //canvas.endDraw();
  //place the canvas on the processing window
  image(canvas, 0, 0);
  //send the canvas through the syphon server
  server.sendImage(canvas);
}

void keyPressed() {
  if (keyCode == LEFT) {
    counterGlobal--;
  } else if (keyCode == RIGHT) {
    counterGlobal++;
  }

  canvas.beginDraw();
  canvas.background(backgroundColor);
  canvas.strokeWeight(5);

  if (counterGlobal%2 == 0) {
    canvas.text(questions[counterGlobal/2], width/2, 2*height/10);
  } else if (counterGlobal%2 == 1) {
    canvas.text(questions[counterGlobal/2], width/2, 2*height/10);
    canvas.text(answers[counterGlobal/2], 0, 5*height/10, width, 5*height/10);
  }

  canvas.endDraw();

  counterGlobal = counterGlobal%(2*questions.length-1);


  //canvas.textAlign(CENTER);
}