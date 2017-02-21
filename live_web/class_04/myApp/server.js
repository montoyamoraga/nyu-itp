//require node modules
var https = require('https');
var fs = require('fs');
var url =  require('url');

//retrieve key and certificate
var options = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};



function handleIt(request, response) {
	var parsedUrl = url.parse(request.url);

	var path = parsedUrl.pathname;
	if (path == "/") {
		path = "index.html";
	}

	fs.readFile(__dirname + path,

		// Callback function for reading
		function (err, fileContents) {
			// if there is an error
			if (err) {
				response.writeHead(500);
				return response.end('error loading ' + request.url);
			}
			// Otherwise, send the data, the contents of the file
			response.writeHead(200);
			response.end(fileContents);
  		}
  	);

	// Send a log message to the console
	console.log("got a request " + request.url);
}

//start the https server
var httpsServer = https.createServer(options, handleIt);
//make it listen to the port 8080
httpsServer.listen(8080);

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpsServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
	// We are given a websocket object in our function
	function (socket) {

		console.log("new client: " + socket.id);

		// When this user "send" from clientside javascript, we get a "message"
		// client side: socket.send("the message");  or socket.emit('message', "the message");
		socket.on('message',
			// Run this function when a message is sent
			function (data) {
				console.log("message: " + data);

				// Call "broadcast" to send it to all clients (except sender), this is equal to
				// socket.broadcast.emit('message', data);
				socket.broadcast.send(data);

				// To all clients, on io.sockets instead
				// io.sockets.emit('message', "this goes to everyone");
			}
		);

		// When this user emits, client side: socket.emit('otherevent',some data);
		socket.on('image', function(data) {
			// Data comes in as whatever was sent, including objects
			console.log("received: 'image' ");
			socket.broadcast.emit('image',data);
		});


		socket.on('disconnect', function() {
			console.log("client left =(");
		});
	}
);
