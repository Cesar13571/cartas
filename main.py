if input.light_level() > 100:
    basic.show_leds("""
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . . # . .
        """)
else:
    basic.clear_screen()
    basic.show_icon(IconNames.SAD)