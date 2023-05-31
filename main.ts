namespace omgRobotics {
    /**
     * Set LED state to ON (turn on) for the specified output pin.
     * @param pin The output pin to control the LED.
     */
    //% blockId=omgroboticssetled
    //% block="(LED) $index"
    //% index.min=0 index.max=25
    export function setLed(pin: number): void {
        if (input.onPinPressed(TouchPin.P0, function () {
        })){
            led.toggleAll()
        }
        else if (input.onPinPressed(TouchPin.P1, function () {
        })) {

        }
    }
}
