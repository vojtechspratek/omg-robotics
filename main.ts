namespace omgRobotics {
    /**
     * LED control for P0 & P1
     * @param pin The output pin to control the LED.
     */

    enum MyEnum {
        //% block="ON"
        ON,
        //% block="OFF"
        OFF,
    }

    enum MyEnum2 {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
    }

    //% blockId=omgroboticssetled
    //% block="(LED) $pin $e "
    export function setLed(pin: MyEnum2, e: MyEnum): void {
        if (input.onPinPressed(TouchPin.P0, function () {
        })) {
            led.toggleAll()
        }
        else if (input.onPinPressed(TouchPin.P1, function () {
        })) {
            //pass
        }
    }
}