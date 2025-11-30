/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Nov 2025
 * 
*/

// Create a strip of 4 LEDs on pin 16
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {

    // green (LED 0)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(1000)

    // yellow (LED 1)
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(1000)

    // red (LED 2)
    strip.clear()
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})

