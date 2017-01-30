//example from the book
//programming for musicians and digital artists

//01_02
//sine wave music

//typed by aaron
//june 2016

//declare SinOsc 
//and chuck it to dac
SinOsc s => dac;

//play one note
//set its frequency
220 => s.freq;
//set its gain
1.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//rest
//set its gain to 0.0
0.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//play another note, same pitch
//set its gain
1.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//rest
//set its gain to 0.0
0.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//play another note, higher pitch, less loud
//set its frequency
330 => s.freq;
//set its gain
0.3 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//rest
//set its gain to 0.0
0.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//play it again
//set its frequency
//set its gain
0.3 => s.gain;
//play for 0.3 seconds
0.3::second => now;

//rest
//set its gain to 0.0
0.0 => s.gain;
//play for 0.3 seconds
0.3::second => now;


