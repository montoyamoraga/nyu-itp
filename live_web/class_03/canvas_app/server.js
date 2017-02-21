//nyu itp - live web class
//taught by shawn van every
//september 2016

//require node modules
var http = require('http');
var fs = require('fs');
var url = require('url');

//declare onRequest function
function onRequest(request, response) {

	var parsedUrl = url.parse(request.url);
	console.log("the request is: " + parsedUrl.pathname);

	// Read in the file they requested
	fs.readFile(__dirname + parsedUrl.pathname,
		// Callback function, called when reading is complete
		function (error, data) {
			// if there is an error
			if (error) {
				response.writeHead(500);
				return response.end('error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			response.writeHead(200);
			response.end(data);
  		}
  	);

}

//create http server
var httpServer = http.createServer(onRequest);
//listen on port 8081
httpServer.listen(8081);

console.log("server is running and waiting");

// websocket portion
// websockets work with the http server
var socketio = require('socket.io');
var io = socketio.listen(httpServer);

// register a callback function to run when we have an individual connection
// yhis is run for each individual user that connects
io.sockets.on('connection',
	// we are given a websocket object in our function
	function (socket) {

		console.log("we have a new client: " + socket.id);

		// when this user "send" from clientside javascript, we get a "message"
		// client side: socket.send("the message");  or socket.emit('message', "the message");
		socket.on('message',
			// Run this function when a message is sent
			function (data) {
				console.log("message: " + data);

				// Call "broadcast" to send it to all clients (except sender), this is equal to
				// socket.broadcast.emit('message', data);
				//socket.broadcast.send(data);

				// To all clients, on io.sockets instead
				io.sockets.emit('message', data);
			}
		);

		// When this user emits, client side: socket.emit('otherevent',some data);
		socket.on('otherevent', function(data) {
			// data comes in as whatever was sent, including objects
			console.log("received: 'otherevent' " + data);
		});

		//emit drawing through socket
		socket.on('drawing', function(fooye) {
			console.log(fooye);
			io.sockets.emit('drawing', fooye);
			socket.emit('senderid', socket.id);
		});

		socket.on('disconnect', function() {
			console.log("client has disconnected");
		});
	}
);
