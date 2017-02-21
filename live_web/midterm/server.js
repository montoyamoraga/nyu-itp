// Use the http module: http://nodejs.org/api/http.html
var http = require('https');
var fs = require('fs');
var url = require('url');
var osc = require('osc');

//security options
var options = {
    key: fs.readFileSync('./security/my-key.pem'),
    cert: fs.readFileSync('./security/my-cert.pem')
};

// http://nodejs.org/api/http.html#http_event_request
function handleIt(request, response) {
    console.log("The URL is: " + request.url);

    //req is an IncominMessage: http://nodejs.org/api/http.html#http_http_incomingmessage
    //res is a ServerResponse: http://nodejs.org/api/http.html#http_class_http_serverresponse
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end('<html><body><b>Hello World</b></body></html>\n');

    var parsedUrl = url.parse(request.url);
    console.log("They asked for " + parsedUrl.pathname);

    var path = parsedUrl.pathname;
    if (path == "/") {
        path = "index.html";
    }

    fs.readFile(__dirname + path,

        // Callback function for reading
        function(err, fileContents) {
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

// Call the createServer method, passing in an anonymous callback function that will be called when a request is made
var httpServer = http.createServer(options, handleIt);

// Tell that server to listen on port 8085
httpServer.listen(8080);

console.log('server listening on port 8080');

//////////////////////////

var clients = [];

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
    // We are given a websocket object in our function
    function(socket) {
        console.log("we have a new client: " + socket.id);

        socket.on('peerid', function(data) {
            //io.sockets.emit("peerid", data);
            socket.broadcast.emit('peerid', data);

            for (var c = 0; c < clients.length; c++) {
                socket.emit('peerid', clients[c]);
            }

            clients.push(data);
        });

        socket.on('drawing', function(data) {
            io.sockets.emit("drawing", data);
        });

        socket.on('osc', function(data) {
            console.log("got an osc yay");
            for (var c = 0; c < clients.length; c++) {
                socket.broadcast.emit('osc', data);
            }
        });
    }
);
