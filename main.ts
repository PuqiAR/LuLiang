function 检测 () {
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 10) {
        人数 += 1
        彩灯()
        basic.pause(1000)
    }
}
function 彩灯 () {
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Orange))
    basic.pause(100)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Yellow))
    basic.pause(100)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Green))
    basic.pause(100)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Blue))
    basic.pause(100)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Purple))
    basic.pause(100)
}
let strip: PlanetX_Display.Strip = null
let 人数 = 0
strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J2, 8, PlanetX_Display.NeoPixelMode.RGB)
basic.forever(function () {
    PlanetX_Display.showUserText(1, "Hello,World!")
    PlanetX_Display.showUserText(2, "Number:" + 人数)
    检测()
})
