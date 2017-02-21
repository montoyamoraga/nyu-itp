# class 03, 2016 09 20

## forever node package

we installed the forever node package with the tag -g in order to make it global.

then we ran the command *forever start server.js* in order to run the server with forever, which allows for the terminal to be free and continue typing on it, which is neat.

you can see all of the processes run by forever with the command *forever list*.

in order to terminate the process, use the four character id shown by *forever list* and do *forever stop id*, replacing the corresponding id.

## socket.emit, socket.on

the *socket.emit* command needs two inputs, the first one is a keyword, it can be anything you want, and the second one is the actual data. you have to take care on the server side to catch and parse the info in an useful way.

the corresponding function on the server side for *socket.emit* is *socket.on*, which catches the message, and then does the corresponding function you want it to do.

scoket.io exists on both the server side and the client side, it can act as both a server and a client, so socket.on and socket.emit can be done in both ways.

## child_process

it spawns another program to run, you can communicate to it with stdin and stdout.

## command line

* move: mv
* copy: cp
* change directory: cd
* make directory: mkdir
* search regular expressions: grep
* replace: sed
* processing of rows and columns: awk
* delete, remove: rm
* do as a super user: sudo
* manual: man
* create file: touch

never ever type this: sudo rm -rf /, which stands for, as a super user, remove recursively and forcefully beginning from the root folder.

## http server and websocket

you need first a http server in order to do a websocket.

## extras

ian used figlet, a cool library that converts plain text to fancier terminal text. you install it on the server, then execute it, and use a callback with stdin and stdout.

## canvas reference

notes from the [w3schools canvas reference](http://www.w3schools.com/html/html5_canvas.asp)

the html canvas element is used to draw graphics on a webpage.

it is used to draw graphics on the fly via javascript.

the canvas element is just a container for graphics, you must use javascript to actually draw the graphics.

a canvas is a rectangular area on a html page. by default, it has no border and no content.

the markup looks like this:

```html
<canvas id="myCanvas" width="200" height="100">
</canvas>
```

always specify and id atribute, in order to alter it with javascript. always specify id and height to define the size of the canvas.

here is an example of an empty canvas with a border:

```html
<canvas id="otherCanvas" width="200" height="100" style="border: 1px solid #000000;">
</canvas>
```

### drawing a line

```javascript
//retrieve the canvas by its id
var c = document.getElementById("myCanvas");

//retrieve the context
var ctx = c.getContext("2d");

//go to the (0,0) position
ctx.moveTo(0,0);

//do a line from the current position to the (200, 100) position
ctx.lineTo(200, 100);

//actually draw the path
//created with the lineTo method
ctx.stroke();
```

### drawing a circle

```javascript
//retrieve the canvas by its id
var c = document.getElementById("myCanvas");

//retrieve the context
var ctx = c.getContext("2d");

//begin the path
ctx.beginPath();

//draw an arc in position (95, 50) with radius 40 and going from 0 to 2*PI
ctx.arc(95, 50, 40, 0, 2*Math.PI)

//actually draw the path
ctx.stroke();
```

### drawing text

```javascript
//retrieve the canvas by its id
var c = document.getElementById("myCanvas");

//retrieve the context
var ctx = c.getContext("2d");

//choose the font
ctx.font = "30 px Arial";

//draw the string "hello world" at the position (10, 50)
ctx.fillText("hello world", 10, 50);
```

### drawing linear gradient

```javascript
//retrieve the canvas by its id
var c = document.getElementById("myCanvas");

//retrieve the context
var ctx = c.getContext("2d");

//create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
```

## canvas tutorial

notes from the [w3schools canvas tutorial](http://www.w3schools.com/graphics/canvas_intro.asp)

### example canvas

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```
all drawing on the canvas must be done with javascript.

### step 1: find the canvas element

```javascript
var canvas = docment.getElementById("myCanvas");
```

### step 2: create a drawing object

the getContext() is a built-in html object, with properties and methods for drawing

```javascript
var ctx = canvas.getContext("2d");
```

### step 3: draw on the canvas

```javascript
ctx.fillStyle = "#ff0000";
```

the fillStyle property can be a css color, a gradient or a pattern. the default fillStyle is black.


the *fillRect(x, y, width, height)* method draws a rectangle, filled with the fill style, on the canvas

```javascript
ctx.fillRect = (0, 0, 150, 75);
```

### canvas coordinates

the html canvas is a two-dimensional grid. the upper-left corner is the (0,0) position.

### draw a line

to draw a straight line on a canvas, use the following methods:

* moveTo(x, y): defines the starting point of the line.
* lineTo(x, y): defines the ending point of the line.

to actually draw the line, you must use of the "ink" methods, like stroke().

example: starting point in (0,0) and an ending point in position(200, 100), then stroke() to actually draw the line.

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
```

### draw a circle

to draw a circle, use the following methods:

* beginPath(): begins a path.
* arc(x, y, , radius, startAngle, endAngle): creates an arc/curve. to create a circle, do it between 0 and 2*Math.PI.

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();
```

## canvas gradients

gradientes can be used to fill rectangles, circles, lines, texts, etc. shapes on the canvas are not limited to solid colors.

there are two types of gradients:

* createLinearGradient(x, y, x1, y1): creates a linear gradient
* createRadialGradient(x, y, r, x1, y1, r1): creates a radial gradient.

once we have a gradient object, we must add two or more color stops, with addColorStop(), which specifies the color stops, and its position along the gradient. gradient positions can be anywhere between 0 to 1.

to use the gradient, set the fillStyle() or strokeStyle() property to the gradient, then draw the shape (rectangle, text, or a line).

### using createLinearGradient()

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
```

### using createRadialGradient()

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
```

## canvas text

to draw text on a canvas, the most important property and methods are:

* font: defines the font properties of the text.
* fillText(text, x, y): draws "filled" text on the canvas.
* strokeText(text, x, y): draws text on the canvas, no fill.

### using fillText()

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("hello world", 10, 50);
```

### using strokeText()

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("hello world", 10, 50);
```

### adding color and center text

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("hello world", width/2, height/2);
```

## canvas images

to draw an image on a canvas, use the following method:

* drawImage(image, x, y)

```javascript
window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 10, 10);
}
```

## canvas reference

### colors, styles and shadows

* fillStyle
* strokeStyle
* shadowColor
* shadowBlur
* shadowOffsetX
* shadowOffsetY

* createLinearGradient()
* createPattern()
* createRadialGradient()
* addColorStop()

### line styles

* lineCap
* lineJoin
* lineWidth
* miterLimit

### rectangles

* rect()
* fillRect()
* strokeRect()
* clearRect()

### paths

* fill()
* stroke()
* beginPath()
* moveTo()
* closePath()
* lineTo()
* clip()
* quadraticCurveTo()
* bezierCurveTo()
* arc()
* arcTo()
* isPointInPath()


### transformations

* scale()
* rotate()
* translate()
* transform()
* setTransform()

### text

* font
* textAlign
* textBaseline

* fillText()
* strokeText()
* measureText()

### image drawing

* drawImage()

### pixel manipulation

* width
* height
* data

* createImageData()
* getImageData()
* putImageData()

### compositing

* globalAlpha
* globalCompositeOperation

### other

* save()
* restore()
* createEvent()
* getContext()
* toDataURL()
