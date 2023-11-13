input.onButtonPressed(Button.A, function () {
    let recopilar = 0
    logging = true
    if (recopilar) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    logging = false
})
let logging = false
logging = false
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("llum", input.lightLevel())
        )
    }
})
