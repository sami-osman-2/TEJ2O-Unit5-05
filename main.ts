/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Oct 2025
 * This program contains Neopixal
 * Created by: Sami Osman
 * Created on: Nov 2025
 * 
*/

 local changes
let strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
let mode = 0
strip.setBrightness(120)

input.onButtonPressed(Button.A, () => mode = (mode + 1) % 4)
input.onGesture(Gesture.Shake, () => {
    for (let i = 0; i < strip.length(); i++)
        strip.setPixelColor(i, neopixel.rgb(Math.randomRange(0, 255), Math.randomRange(0, 255), Math.randomRange(0, 255)))
    strip.show(); basic.pause(200); strip.clear(); strip.show()
})

basic.forever(() => {
    if (mode == 0) {
        for (let c of [NeoPixelColors.Red, NeoPixelColors.Green, NeoPixelColors.Blue])
            for (let i = 0; i < strip.length(); i++) { strip.setPixelColor(i, neopixel.colors(c)); strip.show(); basic.pause(40) }
        strip.clear(); strip.show()
    } else if (mode == 1) {
        for (let i = 0; i < strip.length(); i++) { strip.clear(); strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Yellow)); strip.show(); basic.pause(60) }
    } else if (mode == 2) {
        strip.showRainbow(1, 360); strip.rotate(1); strip.show(); basic.pause(80)
    } else {
        for (let b = 20; b < 255; b += 20) { strip.setBrightness(b); strip.showColor(neopixel.colors(NeoPixelColors.Blue)); strip.show(); basic.pause(20) }
        for (let b = 255; b > 20; b -= 20) { strip.setBrightness(b); strip.showColor(neopixel.colors(NeoPixelColors.Blue)); strip.show(); basic.pause(20) }
    }
})

=======
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



 remote changes (pulled from Github)