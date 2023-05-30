namespace omgRobotics {
    /**
     * Set LED state to ON (turn on) for the specified output pin.
     * @param pin The output pin to control the LED.
     */
    export function setLedOn(pin: number): void {
        pins.digitalWritePin(pin, 1);
    }

    /**
     * Set LED state to OFF (turn off) for the specified output pin.
     * @param pin The output pin to control the LED.
     */
    export function setLedOff(pin: number): void {
        pins.digitalWritePin(pin, 0);
    }
}
