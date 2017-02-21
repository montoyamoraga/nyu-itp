
//variable for storing pointer to the socket
var socket = io.connect();

//array for storing images
var images = ['imagefile01', 'imagefile02', 'imagefile03', 'imagefile04'];
// variable for setting maximum length of array
var maxImages = 4;
//variable for alternating drawing image
var currentImage = 0;

socket.on('connect', function() {
    console.log("connected");
});

socket.on('image', function(data) {
    console.log("got image");
    for (var i = 0; i < maxImages; i++) {
      document.getElementById(images[i]).src = data;
    }
    // document.getElementById('imagefile01').src = data;
    // document.getElementById('imagefile02').src = data;
    // document.getElementById('imagefile03').src = data;
    // document.getElementById('imagefile04').src = data;

});

function initWebRTC() {

    // These help with cross-browser functionality
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    // The video element on the page to display the webcam
    var video = document.getElementById('thevideo');

    // if we have the method
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true
        }, function(stream) {
            video.src = window.URL.createObjectURL(stream) || stream;
            video.play();
        }, function(error) {
            alert("Failure " + error.code);
        });
    }

    var thecanvas = document.getElementById('thecanvas');
    var thecontext = thecanvas.getContext('2d');

    function draw() {
        thecontext.drawImage(video, 0, 0, video.width, video.height);
        var dataUrl = thecanvas.toDataURL('image/webp', 1);

        document.getElementById(images[currentImage]).src = dataUrl;
        currentImage = currentImage + 1;
        currentImage = currentImage % maxImages;

        // for (var i = 0; i < maxImages; i++) {
        //   document.getElementById(images[i]).src = dataUrl;
        // }
        // document.getElementById('imagefile01').src = dataUrl;
        // document.getElementById('imagefile02').src = dataUrl;
        // document.getElementById('imagefile03').src = dataUrl;
        // document.getElementById('imagefile04').src = dataUrl;
        socket.emit('image', dataUrl);
        setTimeout(draw, 3000);
    }

    draw();
};

window.addEventListener('load', initWebRTC);
