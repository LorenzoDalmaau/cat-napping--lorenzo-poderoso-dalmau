def on_button_pressed_a():
    global recopilar
    recopilar = not (recopilar)
    if recopilar:
        basic.show_icon(IconNames.YES)
    else:
        basic.clear_screen()
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
        SoundExpressionPlayMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

recopilar = False
logging = False

def on_every_interval():
    if logging:
        datalogger.log(datalogger.create_cv("temp", input.temperature()),
            datalogger.create_cv("llum", input.light_level()))
loops.every_interval(500, on_every_interval)
