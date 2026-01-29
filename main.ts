/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Oct 2025
 * This program contains Neopixal
 * Created by: Sami Osman
 * Created on: Nov 2025
 * 
*/

let strip16 = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
let strip4 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let mode = 0

strip16.setBrightness(120)

// Button A changes mode for big strip
input.onButtonPressed(Button.A, function () {
    mode = (mode + 1) % 4

    // Traffic light on 4-LED strip
    strip4.clear()
    strip4.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip4.show()
    basic.pause(1000)

    strip4.clear()
    strip4.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip4.show()
    basic.pause(1000)

    strip4.clear()
    strip4.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip4.show()
})

// Shake = random colors on big strip
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i < strip16.length(); i++) {
        strip16.setPixelColor(i, neopixel.rgb(
            Math.randomRange(0, 255),
            Math.randomRange(0, 255),
            Math.randomRange(0, 255)
        ))
    }
    strip16.show()
    basic.pause(200)
    strip16.clear()
    strip16.show()
})

basic.forever(function () {
    if (mode == 0) {
        for (let c of [NeoPixelColors.Red, NeoPixelColors.Green, NeoPixelColors.Blue]) {
            for (let i = 0; i < strip16.length(); i++) {
                strip16.setPixelColor(i, neopixel.colors(c))
                strip16.show()
                basic.pause(40)
            }
        }
        strip16.clear()
        strip16.show()

    } else if (mode == 1) {
        for (let i = 0; i < strip16.length(); i++) {
            strip16.clear()
            strip16.setPixelColor(i, neopixel.colors(NeoPixelColors.Yellow))
            strip16.show()
            basic.pause(60)
        }

    } else if (mode == 2) {
        strip16.showRainbow(1, 360)
        strip16.rotate(1)
        strip16.show()
        basic.pause(80)

    } else {
        for (let b = 20; b < 255; b += 20) {
            strip16.setBrightness(b)
            strip16.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip16.show()
            basic.pause(20)
        }
        for (let b = 255; b > 20; b -= 20) {
            strip16.setBrightness(b)
            strip16.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip16.show()
            basic.pause(20)
        }
    }
})