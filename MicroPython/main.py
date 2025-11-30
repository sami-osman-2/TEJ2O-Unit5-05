"""
Created by: Sami Osman
Created on: Nov 2025
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

# 4 Neopixels on pin16
strip = neopixel.NeoPixel(pin16, 4)

def show_color(index, r, g, b):
    strip.clear()
    strip[index] = (r, g, b)
    strip.show()

while True:
    if button_a.is_pressed():

        # Green on LED 0
        show_color(0, 0, 255, 0)
        sleep(1000)

        # Yellow on LED 1
        show_color(1, 255, 150, 0)
        sleep(1000)

        # Red on LED 2
        show_color(2, 255, 0, 0)
        sleep(1000)
