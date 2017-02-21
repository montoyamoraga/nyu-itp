//nyu itp - live web class
//taught by shawn van every
//september 2016

//variable for pointing to the context
var ctx;

//variable for opening a socket
var socket = io.connect();

//connection happens
socket.on('connect', function() {
    console.log("connected");
});

// receive a message
socket.on('message', function(data) {
    console.log("got: " + data);
    document.getElementById('messages').innerHTML += data;
});

// receive from any event
socket.on('news', function(data) {
    console.log(data);
});

//variables for storing position (x, y)
var dx = 0;
var dy = 0;

//listener for drawing event
socket.on('drawing', function(drawingdata) {
    //log the data to the console
    console.log(drawingdata);
    //begin path

    //ctx.beginPath();
    // ctx.moveTo(dx, dy);
    // ctx.lineTo(drawingdata.x, drawingdata.y);
    // ctx.stroke();
    // dx = drawingdata.x;
    // dy = drawingdata.y;

    var grd = ctx.createLinearGradient(0, 0, 500, 500);
    grd.addColorStop(0.0, "#FCDBD6");
    grd.addColorStop(0.5, "#F85131");
    grd.addColorStop(1.0, "#109BE0");

    ctx.fillStyle = grd;

    ctx.beginPath();

    ctx.arc(dx, dy, 40, 0, 2 * Math.PI);
    ctx.fill();
    dx = drawingdata.x;
    dy = drawingdata.y;
});

//receive a senderid from the server
socket.on("senderid", function(data) {
    //print the data on the console
    console.log(data);
    //assign the content of data to sender variable
    sender = data;
});

var sendmessage = function() {
    var message = document.getElementById('message').value;
    console.log("sending: " + message);

    // send a messaage
    socket.send(message);
};

var sendother = function() {
    var othermessage = document.getElementById('message').value;
    console.log("sending: " + othermessage);

    // Send any kind of data with a custom event
    //socket.emit('otherevent',{ othermessage: othermessage });
    socket.emit('otherevent', othermessage);
};

//initialize function
function init() {

    //initialize variables for storing
    //previous position (x,y)
    var px = 0;
    var py = 0;

    //retrieve canvas by id from html
    var myCanvas = document.getElementById('myCanvas');
    //add event listener mousemove to the canvas
    myCanvas.addEventListener('mousemove',
        function(evt) {
            //console.log(evt);

            // var grd = ctx.createLinearGradient(0, 0, 500, 500);
            // grd.addColorStop(0.0, "#FCDBD6");
            // grd.addColorStop(0.5, "#F85131");
            // grd.addColorStop(1.0, "#109BE0");
            //
            // ctx.fillStyle = grd;
            //
            // ctx.beginPath();
            //
            // ctx.arc(evt.clientX, evt.clientY, 40, 0, 2 * Math.PI);
            // ctx.fill();

            px = evt.clientX;
            py = evt.clientY;

            var thedata = {
                x: evt.clientX,
                y: evt.clientY
            };

            socket.emit('drawing', thedata);

        }
    );

    //retrieve context from the canvas
    ctx = myCanvas.getContext('2d');

    //start with a cat
    var img = document.getElementById("aCat");
    ctx.drawImage(img, 0, 0);

}

//when the page loads, run the init() function
window.addEventListener('load', init);
