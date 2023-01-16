basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (modules.button2.pressed()) {
        modules.led1.setPixelColor(0, 0xff0000)
    } else {
        modules.led1.setPixelColor(0, 0x000000)
    }
})
