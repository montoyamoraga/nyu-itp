//stupid hackathon 2016
//potatobooth
//potatoes background, potato in your face in real time
//using webcam and p5.js and clmtrackr
// For more: https://github.com/auduno/clmtrackr
//by zac, kevin, jasmine, aaron

//global variables

//variable for potato image
let potato;

//variable for ctracker
let ctracker;

//variable for camera capture
let videoInput;
//variables for camera image width and height
let camW, camH;

//variables for scaling images of camera and potato
let scaling_cam;
let scaling_potato;

//preload function
function preload() {
  //load potato image from folder
  potato = loadImage("./assets/potato.png");
}

//setup function
function setup() {
  
  // setup canvas size to the size of the browser
  let canvas = createCanvas(windowWidth, windowHeight);
  
  //set scaling for the camera and potato images=
  scaling_cam = 1.5;
  scaling_potato = 2;
  
  //setup image mode so that images are specified by (x,y) of center
  imageMode(CENTER);
  
  //initialize camera image width and height
  camW = windowWidth/scaling_cam;
  camH = windowHeight/scaling_cam;
  
  //position the canvas on the upper left corner
  canvas.position(0,0);

  // setup camera capture
  videoInput = createCapture(VIDEO);
  videoInput.size(camW, camH);
  
  //set the position for the image capture from the screen
  videoInput.position(windowWidth/2, windowHeight/2);
  //hide the feed of the cam, so that it just is being updated on the draw loop
  videoInput.hide();

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput.elt);
  noStroke();

  // 1 frame per second
  // frameRate(1);
}

function draw() {
  
  //clear p5 canvas
  clear();
  
  //update camera image width and height
  camW = windowWidth/scaling_cam;
  camH = windowHeight/scaling_cam;
  
  //put the camera capture on the screen, on the center of the screen
  image(videoInput, windowWidth/2, windowHeight/2, camW, camH);
  
  // get array of face marker positions [x, y] format
  let positions = ctracker.getCurrentPosition();

  // if there are faces, loop over them
  if (positions.length > 0) {
    for (let i = 0; i < 1; i++) {
      // put the potato image on top of each face
      image(potato, positions[i][0] + 0.5*camW/scaling_cam, positions[i][1] + 0.5*camH/scaling_cam, camW/scaling_potato, camH/scaling_potato);
    }
  }
}
