//example from https://github.com/ccrma/music220a/blob/master/chuck-examples/analysis/tracking/pitch-track.ck
//with mods for fm synthesis from http://chuck.cs.princeton.edu/doc/examples/basic/fm2.ck
//with osc example from http://en.flossmanuals.net/chuck/ch014_using-osc-in-chuck/


//analysis

adc => PoleZero dcblock => FFT fft => blackhole;

//fm synthesis + john chowning reverv
SinOsc m => SinOsc c => JCRev r => dac.chan(0);
r => dac.chan(1);

//carrier freq
220 => c.freq;
//modulator freq
20 => m.freq;
//index of modulation
200 => m.gain;

////Create an OscSend object:
OscSend xmit;
//Set the host and port of this object:
xmit.setHost("localhost", 1234);

// create our OSC receiver
OscRecv orec;
// port 6449
8000 => orec.port;
// start listening (launch thread)
orec.listen();

orec.event("/fromMax,f") @=> OscEvent rate_event; 

//phase modulation is FM synthesis (sync is 2)
2 => c.sync;

//set reverb mix
.3 => r.mix;
//set to block DC
0.99 => dcblock.blockZero;

//set fft params
1024 => fft.size;

//window
Windowing.hamming(fft.size()) => fft.window;

//to hold result
UAnaBlob blob;
//find sample rate
second / samp => float srate;

//interpolate
float target_freq_carrier, curr_freq_carrier, target_gain, curr_gain;
float target_freq_mod, curr_freq_mod;
//spork
spork~ ramp_stuff();

//go for it
while(true) {
    
    fft.upchuck() @=> blob;
    
    //find peak
    0 => float max; int where;
    for (int i; i < blob.fvals().cap(); i++) {
        //compare
        if (blob.fvals()[i] > max) {
            //save
            blob.fvals()[i] => max;
            i => where;
        }
    }
    
    //set carrier freq
    (where $ float) / fft.size() * srate => target_freq_carrier;
    //set mod freq
    (where $ float) / fft.size() * srate / 10 => target_freq_mod;
    //set mod gain
    (max / .8) => target_gain;
    
    //hop
    (fft.size()/2) :: samp => now;
    
    <<< rate_event >>>;
        
}

function void ramp_stuff() {
    
    //mysterious slew
    0.025 => float slew;
    
    //infinite time loop
    while(true) {
        (target_freq_carrier - curr_freq_carrier) * 5 * slew + curr_freq_carrier => curr_freq_carrier => c.freq;
        (target_freq_mod - curr_freq_mod) * 5 * slew + curr_freq_mod => curr_freq_mod => m.freq;
        (target_gain - curr_gain) * slew + curr_gain => curr_gain => c.gain;
        
         //To send a message with one integer:
        xmit.startMsg("conductor/downbeat, f");
        
        //add a float
        xmit.addFloat(curr_gain);
                
        0.025 :: second => now;
        
               
    }
}


