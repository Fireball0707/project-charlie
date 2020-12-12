input.onButtonPressed(Button.A, function () {
    Temp = input.temperature()
    basic.showNumber(Temp)
})
input.onButtonPressed(Button.B, function () {
    Compass = input.compassHeading()
    input.calibrateCompass()
    basic.showNumber(Compass)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (input.lightLevel() > 100) {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Yes)
    } else if (input.lightLevel() < 100) {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.No)
    }
})
let Compass = 0
let Temp = 0
basic.showString("Hello my Name is Charlie")
basic.pause(200)
basic.showString("I am your personal assistant ")
