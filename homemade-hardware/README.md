# homemade hardware

by andy sigler

## classes

### class 01 - thursday january 25th 2018

attiny85

when you write arduino code, after you hit compile, the code gets converted to machine code, which is specific for each microcontroller.

you have to select which arduino board you are using, because they run different microcontrollers and so the compiled code ends up differently.

* go to https://github.com/spenceKonde/ATTinycore
* go to installation
* add http://drazzy.com/package_drazzy.com_index.json to board manager on the arduino ide
* follow the rest of the instructions on the website

attiny85 is programmed through spi

we first got to turn our arduino into an isp. isp stands for in-system programmer. our arduino will be an intermediary between our computer and the attiny 85.

in the arduino ide, there is an example of arduino isp. we select arduino uno as the board and select the correct serial port and then upload the arduino isp sketch to the arduino uno board.

next step is to confirm that the chip is actually and attiny85. the circle or marker is the side up.

the pins are counted from up-left (pin1) to up-right, in a counter-clockwise way.

now we need to power the attiny85. ground is pin4 (down-left) and vcc is pin8 (up-right).

now we will connect to the spi pins on the arduino uno. they are pins 11, 12, and 13. pins 5, 6, 7 on the attiny 85 (on the right) go to the corresponding pins 11, 12, 13 on the arduino uno.

pin10 on the arduino is the reset and will be connected to pin1 on the attiny85.

the voltage rating of the attiny85 is between 2.7 and 5.5v.

summary of pins in attiny85

* pin1 - to pin10 arduino (reset)
* pin2 - nothing
* pin3 - nothing
* pin4 - ground
* pin5 - to pin11 on arduino (spi)
* pin6 - to pin12 on arduino (spi)
* pin7 - to pin13 on arduino (spi)
* pin8 - vcc 5v

now we will open blink on the arduino ide.

on the tools menu:

* board - attiny 24/45/85
* timer: 1 clcok: CPU
* chip: attiny85
* clock: 8 mhz internal
* bod: bod disabled
* LTO (1.6.11+ only): disabled
* port: (arduino uno)
* programmer: arduino as isp

go to tools => burn bootloader
