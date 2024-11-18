let sound = 0
input.onPinPressed(TouchPin.P1, function () {
    let middle_a = 0
    for (let index = 0; index < 4; index++) {
        let _14_beat = 0
        music.play(music.tonePlayable(sound, _14_beat), music.PlaybackMode.UntilDone)
        sound += -25
    }
    sound = middle_a
})
basic.forever(function () {
	
})
