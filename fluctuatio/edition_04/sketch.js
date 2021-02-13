//fluctuatio festival
//by aaron montoya-moraga
//february 2017

function setup() {
    //canvas with dimensions for facebook cover photo
    createCanvas(828, 315);
    //beige background
    background(255, 235, 205);
}


function draw() {

    //yellow rectangle

    drawYellowRectangle();

    drawRedRectangle();

    drawBlueRectangle();

    drawText();

}

function drawYellowRectangle() {

    //save current drawing mode
    push();

    //rotate coordinates
    rotate(PI / 3.0);

    //yellow color
    fill(255, 255, 51);
    //no border
    noStroke();

    //rectangle defined by upper-left corner
    rectMode(CORNER);

    //rect(posX, posY, width, height)
    rect(0, 0, 300, 100);

    //restore previous drawing mode
    pop();

}

function drawRedRectangle() {

    //save current drawing mode
    push();

    //rotate coordinates
    rotate(PI / 3.0);

    //red color
    fill(255, 0, 51);
    //no border
    noStroke();

    //rectangle defined by upper-left corner
    rectMode(CORNER);

    //rect(posX, posY, width, height)
    rect(200, -200, 300, 100);

    //restore previous drawing mode
    pop();

}

function drawBlueRectangle() {

    //save current drawing mode
    push();

    //rotate coordinates
    rotate(PI / 3.0);

    //red color
    fill(51, 0, 255);
    //no border
    noStroke();

    //rectangle defined by upper-left corner
    rectMode(CORNER);

    //rect(posX, posY, width, height)
    rect(200, -650, 300, 100);

    //restore previous drawing mode
    pop();

}

function drawText() {

    //save current drawing mode
    push();

    //rotate coordinates
    //rotate(-PI / 4.0);

    //align text to center
    textAlign(CENTER);

    //text font
    textFont("Didot Regular");

    textSize(50);
    textWidth(6);
    text("fluctuatio", 600, 220);

    textSize(20);
    text("avant-garde & electroacoustic music festival", 600, 245);

    textSize(15);
    text("sunday february 26th 2017, 9pm - 1am", 600, 265);

    textSize(15);
    text("$5, matchless bar, 557 manhattan ave, bk ny", 600, 285);

    //restore previous drawing mode
    pop();

}
