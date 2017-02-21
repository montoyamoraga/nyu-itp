# class 02, 2016 09 13

## peer review of self-portrait assignment

cool grid system: [http://960.gs/](http://960.gs/)
as seen on the html & css book.

## ways of refreshing page

with the following tag we can make the webpage refresh every 5 seconds:
<meta http-equiv="refresh" content="5">

it is not efficient because it overloads the server with requests.

there is also ajax, which stands for asynchronous javascript and xml.

when you type into google, ajax is probable being used to retrieve suggestions to autocomplete and to change the page without reloading it.

http stands for hypertext transfer protocol.

ftp stands for file transfer protocol.

http and ftp are built on top of tcp.

tcp stands for transmission control protocol.

tcp does a socket connection between server-client, which allows data transmission to occur between computers on the internet.

tcp does a bidirectional communication.

an http client does a request and opens a socket.

http closes the connection after transfering the file.

websockets can stay open, allowing to receive and send data back and forth in realtime. they fix the issue of constantly making requests to the server.

websockets make slack, chat, webcam feeds and tons of things possible.

## classic web development

you have a classic http server, like apache, it's open source and powerful.

you use a scripting language, like php, which is interpreted as a request and executed by http.

alternatives to php are c, perl and colfusion.

## modern web development

people started doing their own servers in other languages, like python, ruby and node.js.

node.js allows to run js in the command line, which will allows to do the client side and the server side programming on the same language, javascript.

the chrome browser runs on v8 and is open source.

## virtual servers

we will be using digital ocean and a virtual server done with a "one click app" install of node 4.4.5 on linux 14.04.

then we open the terminal, and we enter "ssh root@ip_address "

ssh stands for secure shell, is a secure login. i changed the password to "liveWeb".

let's create now the index.html and server.js files.

servers on the internet have ports. port 80 is the default web port. 8080 is another web port by convention.

open cyberduck and upload the files.

do "npm install socket.io" on the terminal

to run the server do "node server.js"

we are not seeing our own messages. instead of using broadcast, use emit.
