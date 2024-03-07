if (input.lightLevel() > 100) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . . # . .
        `)
} else {
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
}
