input.onButtonPressed(Button.A, function () {
    let recopilar = 0
    logging = !(logging)
    if (recopilar) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
let logging = false
logging = false
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("llum", input.lightLevel())
        )
    }
})
