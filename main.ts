input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P2, 40)
        basic.pause(500)
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
