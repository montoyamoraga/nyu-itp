//number of users
var numberUsers = 0;

//number of lines
var numberLines = 0;

//message being receiveed
var input;

//id of sender
var sender;

//open socket
var socket = io.connect("http://159.203.85.230:8080");

//when the socket is connected, callback
//to anonymous function for printing on console
socket.on('connect', function() {
    console.log("socket on, oh yeah");
    document.getElementById("connection").innerHTML = "new user connected";
});

//receive a chatmessage call from the server
socket.on("chatmessage", function(data) {
    //print the data on the console
    console.log(data);
    //assign the content of data to input variable
    input = data;
    //call to the addReceiveFunction
    addReceive();
});

//receive a senderid from the server
socket.on("senderid", function(data) {
    //print the data on the console
    console.log(data);
    //assign the content of data to sender variable
    sender = data;
});

//function sendMessage
function sendMessage(message) {
    console.log("chatmessage: " + message);
    socket.emit('chatmessage', message);
};

//addSend() function
function addSend() {
    numberLines = numberLines + 1;
    var div = window.document.createElement("div");
    div.className = "yourMessage";
    div.id = "line " + numberLines;
    window.document.getElementsByTagName("body")[0]
        .appendChild(div);
    window.document.getElementById(div.id).innerHTML = " <span id='me'>me</span>: " + " <span id='meContent'>" + document.getElementById("message").value + "</span>";
    //add info about message sent:
    numberLines = numberLines + 1;
    var divInfo = window.document.createElement("div");
    divInfo.className = "messageInfo";
    divInfo.id = "line" + numberLines;
    window.document.getElementsByTagName("body")[0]
        .appendChild(divInfo);
    window.document.getElementById(divInfo.id).innerHTML = " <span id='meInfo'>meInfo:</span> " + " <span id='meInfoContent'>" + document.getElementById("message").value.length + " characters long." + "</span>";
}

function addReceive() {
    numberLines = numberLines + 1;
    var div = window.document.createElement("div");
    div.className = "theirMessage";
    div.id = "line" + numberLines;
    window.document.getElementsByTagName("body")[0].appendChild(div);
    window.document.getElementById(div.id).innerHTML = "<span id ='other'>" + sender + "</span>: " + "<span id ='otherContent'>" + input + "</span>: ";
		//add info about message received:
    numberLines = numberLines + 1;
    var divInfo = window.document.createElement("div");
    divInfo.className = "messageInfo";
    divInfo.id = "line" + numberLines;
    window.document.getElementsByTagName("body")[0]
        .appendChild(divInfo);
    window.document.getElementById(divInfo.id).innerHTML = " <span id='otherInfo'>otherInfo:</span> " + "<span id ='otherInfoContent'>" + document.getElementById("message").value.length + " characters long." + "</span>: ";
}

var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


var choice;

function checkSubmit(e) {
    //check if key pressed is enter
    if (e && e.keyCode == 13) {
        console.log("affirmative");
        submit();
				//if it is not an enter, change the color
				//of the background
    } else {
			choice = Math.floor(colors.length*Math.random())
			window.document.getElementById("body").style.backgroundColor = colors[choice];
		}
}



//submit function
function submit() {
    addSend();
    sendMessage(window.document.getElementById("message").value);
    window.document.getElementById("message").value = "";
}
