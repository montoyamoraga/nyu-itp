//server for my instrument


//require packages
var http = require("http");
var url = require("url");
var fs = require("fs")

//declare and create server
var server = http.createServer(requestHandler);
//make it listen to port 8080
server.listen(8080);

//print on console
console.log("hey this is on");

//declare function for handling requests
//arguments are request and response
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

//code for executing a command line
var exec = require("child_process").exec;
var cmd = "chuck pitch_tracker.ck";

exec(cmd, function(error, stdout, stderr) {
});
