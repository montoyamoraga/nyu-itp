# class 08, 2016 10 25

## data channels

they are very similar to sockets.

sockets have bidirectional communication between server and client.

tcp stands for transmission control protocol.

tcp is reliable, if it misses a package it asks for it again.

ftp, sftp, http and sockets are built on top of tcp.

udp is another protocol, which is not reliable.

if udp misses communication of a package, it won't ask for it again.

udp is good for large volumes of real-time data such as video, where if you lose one of the frames, it doesn't matter too much.

webrtc has two modes, it has a reliable mode and an unreliable mode.

we have used so far the unreliable mode on webrtc.

your router has a dhcp and a nat server.

in a router, there is a dhcp server, that gives you an ip address
when you connect to the wifi. it is not a public address, it is just
valid in the local network.

after that, anything that you request to the internet, goes through
nat, a network address tranlsation, which handles requests and responses
to the outer internet.

there are servers called stun servers and turn servers.



## next week

start using mobile technology, use phone sensors in real time
