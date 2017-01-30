//example from https://github.com/ccrma/music220a/blob/master/chuck-examples/analysis/tracking/pitch-track.ck
//with mods from http://chuck.cs.princeton.edu/doc/examples/basic/fm2.ck

//analysis

adc => PoleZero dcblock => FFT fft => blackhole;

//fm synthesis + john chowning reverv
SinOsc m => SinOsc c => JCRev r => dac;

//carrier freq
220 => c.freq;
//modulator freq
20 => m.freq;
//index of modulation
200 => m.gain;

//phase modulation is FM synthesis (sync is 2)
2 => c.sync;

//set reverb mix
.01 => r.mix;
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
float target_freq, curr_freq, target_gain, curr_gain;
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
    
    //set freq
    (where $ float) / fft.size() * srate => target_freq;
    //set gain
    (max / .8) => target_gain;
    
    //hop
    (fft.size()/2) :: samp => now;
    
}

function void ramp_stuff() {
    
    //mysterious slew
    0.025 => float slew;
    
    //infinite time loop
    while(true) {
        (target_freq - curr_freq) * 5 * slew + curr_freq => curr_freq => c.freq;
        (target_gain - curr_gain) * slew + curr_gain => curr_gain => m.gain;
        0.025 :: second => now;
        
    }
}


