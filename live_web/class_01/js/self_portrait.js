//variables for storing pointers to videos
var hair_top;
var ear_left, ear_right;
var eye_left, eye_right;
var face;
var foot_left, foot_right;
var hand_left, hand_right;

//variables for storing pointers to audios
var invierno, before;

//add eventListener that triggers the setup() function
//after the window is loaded
window.addEventListener("load", setup);

window.document.addEventListener("mousedown", function() {
    //console.log("clicked");
})

//declaration of setup function
function setup() {

    //retrieve html elements by their id
    //and assign them to js variables
    retrieveElements();

    //add event listeners for hover
    addHover();

    addClick();

    //append the string "nothing" to the body
    //window.document.body.innerHTML += "nothing";

    //divTwo.innerHTML = "haha";
    //divTwo.style.color = "red";
    //divTwo.style.fontSize = "100px";
    //divTwo.addEventListener("click", whenMouseIsClicked);

}

//function for retrieving html elements by their id
function retrieveElements() {
    hair_top = window.document.getElementById("hair_top");
    ear_left = window.document.getElementById("ear_left");
    ear_right = window.document.getElementById("ear_right");
    eye_left = window.document.getElementById("eye_left");
    eye_right = window.document.getElementById("eye_right");
    face = window.document.getElementById("face");
    foot_left = window.document.getElementById("foot_left");
    foot_right = window.document.getElementById("foot_right");
    hand_left = window.document.getElementById("hand_left");
    hand_right = window.document.getElementById("hand_right");

    invierno = window.document.getElementById("invierno");
    before = window.document.getElementById("before");
}

function addHover() {

    face.addEventListener("mouseenter", function() {
        face.src = "./media/mouth.mp4";
        face.play();
    });

    face.addEventListener("mouseleave", function() {
        face.src = "./media/face.mp4"
        face.play();
    });

    hand_left.addEventListener("mouseenter", function() {
        hand_left.playbackRate = 7.0;
    });

    hand_left.addEventListener("mouseleave", function() {
        hand_left.playbackRate = 1.0;
    });

    hand_right.addEventListener("mouseenter", function() {
        hand_right.playbackRate = 0.5;
    });

    hand_right.addEventListener("mouseleave", function() {
        hand_right.playbackRate = 1.0;
    });

    //

    eye_left.addEventListener("mouseenter", function() {
        if (!eye_left.paused) {
            eye_left.pause();
        } else {
            eye_left.play();
        }

    });

    eye_right.addEventListener("mouseenter", function() {
        eye_right.pause();
    });

    eye_right.addEventListener("mouseleave", function() {
        eye_right.play();
    });

}

function addClick() {

    hair_top.addEventListener("click", function() {
        before.play();
    });

    hair_top.addEventListener("dblclick", function() {
        before.pause();
        before.currentTime = 0;
    });

    ear_left.addEventListener("click", function() {
        invierno.play();
    });

    ear_left.addEventListener("dblclick", function() {
        invierno.pause();
        invierno.currentTime = 0;
    });

    ear_right.addEventListener("click", function() {
        var sign;
        if (Math.random() > 0.5) {
            sign = 1;
        } else {
            sign = -1;
        }
        invierno.playbackRate = sign * (0.5 + 3 * Math.random());
    });

    ear_right.addEventListener("dblclick", function() {
        invierno.playbackRate = 1.0;
    });

    foot_left.addEventListener("click", function() {
      text.innerHTML = "hey that tickles\n";
    });

    foot_left.addEventListener("dblclick", function() {
      text.innerHTML = "come on stop it\n";
    });

    foot_right.addEventListener("click", function() {
      credits.innerHTML = "this is a project by aaron";
    });

    foot_right.addEventListener("dblclick", function() {
      credits.innerHTML = "music by gepe and atoms for peace" + "<br />" + "thanks to jackie for filming assistance";
    });
}
