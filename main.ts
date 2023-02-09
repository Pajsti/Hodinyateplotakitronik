input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    timeanddate.set24HourTime(15, 2, 0)
    timeanddate.setDate(2, 9, 2023)
})
input.onButtonPressed(Button.A, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showString("" + (Kitronik_klimate.humidity()))
    basic.pause(2000)
    basic.showString("" + (Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.Pa)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(timeanddate.date(timeanddate.DateFormat.MD))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C)))
})
