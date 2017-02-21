# class 05, 2016 10 04

## WebRTC

WebRTC is a new standard being put forth by the w3x to create an api to deliver realtime data, audio, and video between browsers in a peer to peer fashion. this means there is no server. it reduces the amount of time for the data to be transferred.

## peerjs

unfortunately, there is a fair amount of complexity involved in sending descriptions of the data, audio and video channels from peer to peer.

fortunately, a few js libraries have popped up to aide in this. one of them is peerjs, yay.


## tcp

the protocols we used on this class, like ssh, http, https, sftp, socket, are on top of tcp.

tcp is reliable. if communication fails, is requested again, it works without loss.

in the world of live video, reliability is a burden, because of the amount of data being transmitted.

## udp

udp stands for user datagram protocol. it unreliable, it sends the data and walks away. there is no re request at all. it is cool for video, yay, because if a frame drops, it doesn't matter. it is uncool for file transferes, coz the files would not be sent at all, or drop parts of it, which is sad.
