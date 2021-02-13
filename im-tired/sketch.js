var maxNumber = 10;
var sizes = [];
var posX = [];
var posY = [];
var direction = [];
var originalText = [];
var displayText = [];
var step = [];
var speaker;
var firstAct = true;
var secondAct = false;
var thirdAct = false;
var said = false;
var finalSize = 10;
var theEnd = false;
var byebye = false;
var right = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  originalText = [
    "i'm tired",
    "of this",
    "of being sad",
    "of being depressed",
    "of not being able to smile",
    "of crying myself to sleep",
    "of eating too much",
    "of being overweight",
    "of being heartbroken",
    "of being rejected",
    "of blaming my parents",
    "of blaming myself",
    "of feeling like shit",
    "of having nightmares",
    "of not being able to sleep",
    "of not being able to wake up",
    "of sleeping alone",
    "of being gullible",
    "of not believing in myself",
    "of biting my nails",
    "of wanting to shout",
    "of not wanting to talk",
    "of missing you",
    "of missing my old self",
    "of remembering awful stuff",
    "of remembering nothing at all",
    "of feeling awkward",
    "of not speaking my own language",
    "of forgetting my own language",
    "of wanting to be cool",
    "of not being cool",
    "of working until late",
    "of eating too late",
    "of trying to be right",
    "of being wrong so much",
    "of falling in love",
    "of falling out of love",
    "of pushing myself too hard",
    "of getting sick",
    "of the hurt",
    "of the pain",
    "of the scars",
    "of my traumas"
  ];

  background(0);
  fill(255);
  frameRate(30);
  textAlign(LEFT);

  speaker = new p5.Speech("Alex");
}

function draw() {
  background(0);

  if (firstAct) {
    updateValues();
    drawText();
  }

  if (secondAct) {
    fuckThis();
  }
  if (thirdAct && !byebye) {
    purification();
  }
  if (theEnd & !byebye) {
    background(0);
    textSize(finalSize);
    text("right?", windowWidth / 2, windowHeight / 2);
    if (right == false) {
      speaker.speak("right?");
      right = true;
    } else {
      speaker.speak("");
    }

  }
}

function mousePressed() {
  addText();
}

function addText() {
  if (originalText.length > 0) {
    var aux = originalText.shift();
    speaker.setVoice(3);
    speaker.speak(aux);
    displayText.push(aux);
    sizes.push(60 + random(40));
    posX.push(0.6 * random(displayWidth));
    posY.push(50 + 0.1 * random(displayHeight));
    direction.push(1);
    step.push(0.08);
  }
}

function updateValues() {
  if (displayText.length > 0) {
    for (var i = 0; i < displayText.length; i++) {
      sizes[i] = sizes[i] * 0.99;
      posX[i] = posX[i] + random(-1, 1);
      posY[i] = posY[i] + direction[i] * step[i] * posY[i];
      if (posY[i] > 0.9 * windowHeight) {
        direction[i] = -1 * direction[i];
      }
      if (posY < 0.05 * windowHeight) {
        direction[i] = -1 * direction[i];
      }
    }
  }

}

function drawText() {

  for (var i = 0; i < displayText.length; i++) {
    textSize(sizes[i]);
    text(displayText[i], posX[i], posY[i]);
  }

}

function fuckThis() {
  background(255);
  textSize(200);
  textAlign(CENTER);
  var result = random(1);
  if (result < 0.5) {
    background(0);
    fill(255);
  } else {
    background(255);
    fill(0);
  }
  text("FUCK THIS", windowWidth / 2, windowHeight / 2);
  speaker.setVoice(3);
  speaker.speak("FUCK THIS");
}

function purification() {
  background(0);
  fill(255);
  textSize(finalSize);
  textAlign(CENTER);
  text("i am better than this", windowWidth / 2, windowHeight / 2);
  finalSize = finalSize * 1.01;
  console.log(finalSize);

  if (!said) {
    speaker.speak("i'm better than this");

  } else {
    speaker.speak("stop!");
    said = true;
  }

}

function keyPressed() {

  if (keyCode == ESCAPE) {
    firstAct = false;
    secondAct = false;
    thirdAct = true;
  }
  if (keyCode == ENTER) {
    theEnd = true;
    thirdAct = false;
    console.log("the end");
    said = false;
  }

  if (firstAct == true && theEnd == false) {
    firstAct = false;
    secondAct = true;
    thirdAct = false;
  }

}
