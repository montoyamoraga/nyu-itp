function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  setupOsc(1234, 3334);
}

function draw() {

}

var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function keyTyped() {

  for (var i = 0; i < keys.length; i++) {
    if (key === keys[i]) {
      background(i*10, 255-i*10, 255/2+i*10);
    }
  }
}

//receive OSC
//taken from https://github.com/genekogan/p5js-osc/blob/master/p5-basic/sketch.js
// var x, y;
//
// function receiveOsc(address, value) {
// 	console.log("received OSC: " + address + ", " + value);
//
// 	if (address == '/conductor/downbeat') {
// 		x = value[0];
// 		y = value[1];
// 	}
// }
//
// function setupOsc(oscPortIn, oscPortOut) {
// 	var socket = io.connect('http://127.0.0.1', { port: 8081, rememberTransport: false });
// 	socket.on('connect', function() {
// 		socket.emit('config', {
// 			server: { port: oscPortIn,  host: '127.0.0.1'},
// 			client: { port: oscPortOut, host: '127.0.0.1'}
// 		});
// 	});
// 	socket.on('message', function(msg) {
// 		if (msg[0] == '#bundle') {
// 			for (var i=2; i<msg.length; i++) {
// 				receiveOsc(msg[i][0], msg[i].splice(1));
// 			}
// 		} else {
// 			receiveOsc(msg[0], msg.splice(1));
// 		}
// 	});
// }
