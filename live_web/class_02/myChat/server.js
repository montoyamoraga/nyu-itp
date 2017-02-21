// http portion

//require the http nodejs module
var http = require('http');
//require the url nodejs module
var url = require('url');
//require the filesystem nodejs module
var fs = require('fs');

//create a server that uses the requestHandler function
var httpServer = http.createServer(requestHandler);

//make the server listen @ port 8080
httpServer.listen(8080);

//function for handling requests
function requestHandler(request, response) {

    //retrieve the parsed url from the request
    var parsedUrl = url.parse(request.url);
    console.log("The request is: " + parsedUrl.pathname);

    fs.readFile(__dirname + parsedUrl.pathname,
        // callback function for reading
        function(err, data) {
            // if there is an error
            if (err) {
                response.writeHead(500);
                return response.end('error loading ' + parsedUrl.pathname);
            }
            // Otherwise, send the data, the contents of the file
            response.writeHead(200);
            response.end(data);
        }
    );

}

// websocket portion
// websockets work with the http server
var io = require("socket.io").listen(httpServer);

// register a callback function to run when we have an individual connection
// this is run for each individual user that connects
io.sockets.on("connection",
    // we are given a websocket object in our function
    function(socket) {

        console.log("we have a new client: " + socket.id);

        // When this user emits, client side: socket.emit('otherevent',some data);
        socket.on("chatmessage", function(data) {
            // Data comes in as whatever was sent, including objects
            console.log("got: 'chatmessage' " + data);

            // Send it to all of the clients
            socket.broadcast.emit("senderid", socket.id);
            socket.broadcast.emit("chatmessage", data);

        });

        socket.on('disconnect', function() {
            console.log("bye bye client " + socket.id);
        });
    }
);
