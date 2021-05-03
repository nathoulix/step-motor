input.onButtonPressed(Button.A, function () {
    if (n == 0) {
    	
    } else {
        n += -10
        envoi()
    }
})
input.onButtonPressed(Button.B, function () {
    if (n != 180) {
        n += 10
        envoi()
    } else {
    	
    }
})
function envoi () {
    pins.servoWritePin(AnalogPin.P1, n)
}
let n = 0
n = 90
pins.servoWritePin(AnalogPin.P1, n)
basic.forever(function () {
    basic.showNumber(n)
})
