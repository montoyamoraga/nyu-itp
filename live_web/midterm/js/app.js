/* Get User Media */
var my_stream = null;
// We'll use a global variable to hold on to our id from PeerJS
var peer_id = null;
var peer = null;
var makeCall;
var sendOsc;
var WebMidi;

////
//midi code adapted from //https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/

var log = console.log.bind(console),
    midi, inputs, outputs;
var data, cmd, channel, type, note, velocity;

// request MIDI access
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("no midi support in your browser");
}

// midi functions
function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    outputs = [];
    // loop through all inputs

    var iter = midiAccess.outputs.values();
    for (var i = iter.next(); i && !i.done; i = iter.next()) {
        outputs.push(i.value);
    }

    // listen for connect/disconnect message
    midi.onstatechange = onStateChange;
}

function onMIDIMessage(event) {
    data = event.data,
        cmd = data[0] >> 4,
        channel = data[0] & 0xf,
        type = data[0] & 0xf0, // channel agnostic message type. Thanks, Phil Burk.
        note = data[1],
        velocity = data[2];

    //console.log('data', data, 'cmd', cmd, 'channel', channel);
    logger(keyData, 'key data', data);
}

function onStateChange(event) {
    var port = event.port,
        state = port.state,
        name = port.name,
        type = port.type;
    if (type == "input") console.log("name", name, "port", port, "state", state);
}

function listInputs(inputs) {
    var input = inputs.value;
    log("Input port : [ type:'" + input.type + "' id: '" + input.id +
        "' manufacturer: '" + input.manufacturer + "' name: '" + input.name +
        "' version: '" + input.version + "']");
}

function listOutputs(outputs) {
    var output = outputs.value;
    log("Output port : [ type:'" + output.type + "' id: '" + output.id +
        "' manufacturer: '" + output.manufacturer + "' name: '" + output.name +
        "' version: '" + output.version + "']");
}

function onMIDIFailure(e) {
    log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
}
////

//adapted from
//https://webaudio.github.io/web-midi-api/#sending-midi-messages-to-an-output-device

function sendMidiNote(midiAccess, midiNote) {
    //var noteOnMessage = [0x90, 60, 127]; // note on, middle C, full velocity
    var noteOnMessage = [0x90, midiNote, 127]; // note on, middle C, full velocity
    //var output = midiAccess.outputs.get(portID);
    console.log(outputs[0]);
    console.log(outputs[1]);
    console.log(outputs[2]);
    outputs[0].send(noteOnMessage);
    outputs[1].send(noteOnMessage);
    outputs[2].send(noteOnMessage); //omitting the timestamp means send immediately.
    //output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // Inlined array creation- note off, middle C,
    // release velocity = 64, timestamp = now + 1000ms.
}

//Enable WebMidi
// WebMidi.enable(function(err) {
//     if (err) {
//         console.log("webMidi could not be enabled.", err);
//     }
//     else {
//       console.log("yeah");
//     }
// });
//
// //Viewing available inputs and outputs
// console.log(WebMidi.inputs);
// console.log(WebMidi.outputs);
//
// // Display the current time
// console.log(WebMidi.time);
//
// // Retrieving an output port/device using its id, name or index
// var output = WebMidi.getOutputByName("to Max 2");
// output = WebMidi.outputs[0];
//
// // Play a note on all channels of the selected output
// output.playNote("C3");
///

function setId() {
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true,
            audio: false
        }, function(stream) {
            my_stream = stream;
            var videoElement = document.getElementById("myVideo");
            videoElement.src = window.URL.createObjectURL(stream) || stream;
            videoElement.play();

            // Register for an API Key:	http://peerjs.com/peerserver
            // var peer = new Peer(document.getElementById('myid').value, {key: '5i1mw7sdp1fw29'});
            // The Peer Cloud Server doesn't seem to be operational, I setup a server on a Digital Ocean instance for our use, you can use that with the following constructor:
            //you can have customized id
            peer = new Peer(document.getElementById('myid').value, {
                host: 'liveweb.itp.io',
                port: 9000,
                path: '/'
            });

            peer.on('error', function(err) {
                console.log(err);
            });

            // Get an ID from the PeerJS server
            peer.on('open', function(id) {
                console.log('my peer id is ' + id);
                peer_id = id;
            });

            peer.on('call', function(incoming_call) {
                console.log("got a call!");
                incoming_call.answer(my_stream); // Answer the call with our stream from getUserMedia
                incoming_call.on('stream', function(remoteStream) { // we receive a getUserMedia stream from the remote caller
                    // And attach it to a video object
                    // var ovideoElement = document.getElementById('otherVideo');
                    // ovideoElement.src = window.URL.createObjectURL(remoteStream) || remoteStream;
                    // ovideoElement.setAttribute("autoplay", "true");
                    // ovideoElement.play();

                    var ovideoElement = document.createElement("video");
                    ovideoElement.src = window.URL.createObjectURL(remoteStream) || remoteStream;
                    ovideoElement.setAttribute("autoplay", "true");
                    ovideoElement.setAttribute("width", "320");
                    ovideoElement.setAttribute("height", "240");
                    ovideoElement.play();
                    document.body.appendChild(ovideoElement);

                });
            });

            peer.on('connection', function(conn) {
                console.log("connected!!!");

                conn.on('data', function(data) {
                    console.log(data);
                    console.log("this totally works");
                    //maybes
                    sendMidiNote(midi, data);
                });
            });

            peer.on('osc', function(what) {
                console.log("this is osc yeah");
                console.log(what);
            });

            // chat // accepting from all events
            peer.on('message', function(data) {
                console.log("new message:", data);
            });


        }, function(err) {
            console.log('failed to get local stream', err);
        });
    }

    makeCall = function() {
        var numToCall = document.getElementById('peertocall').value;
        var call = peer.call(numToCall, my_stream);

        call.on('stream', function(remoteStream) { // we receive a getUserMedia stream from the remote caller
            // And attach it to a video object
            //for one person, we can use getElementById, cuz the following call-ins will overroll the previous one, but if we create a new element
            // var ovideoElement = document.getElementById('othervideo');
            var ovideoElement = document.createElement("video");
            ovideoElement.src = window.URL.createObjectURL(remoteStream) || remoteStream;
            ovideoElement.setAttribute("autoplay", "true");
            ovideoElement.setAttribute("width", "320");
            ovideoElement.setAttribute("height", "240");
            ovideoElement.play();
            // var textElement = document.createElement("h1");
            // textElement.setAttribute("id", "text");
            // document.getElementById("text").innerHTML = "Call from: ";
            //the following also for muli-callins
            // document.body.appendChild(textElement);
            document.body.appendChild(ovideoElement);
        });
    }

    //http://peerjs.com/docs/#start
    sendOsc = function() {
        var numToCall = document.getElementById('peertocall').value;
        var oscMessage = document.getElementById('noteNumber').value;

        console.log("this is the note number " + oscMessage);

        var conn = peer.connect(numToCall);

        conn.on('open', function() {
            conn.send(oscMessage);
            console.log("yay open");
            sendMidiNote(midi, oscMessage);
        });

        conn.on('close', function() {
            console.log("yay closed");
        });



    }

}
