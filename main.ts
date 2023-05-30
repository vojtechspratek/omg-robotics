namespace customExtension {
    /**
     * Observe button press with specified input pin.
     * @param pin The input pin to observe.
     * @param returnBoolean Whether to return a boolean value indicating the button press.
     *                      If false, it will generate an event instead.
     * @returns True if the button is pressed (if returnBoolean is true).
     */
    // Variant with returning a boolean value
    // Example usage: let buttonPressed = customExtension.observeButtonPress(pin, true);
    export function observeButtonPress(pin: number, returnBoolean: boolean): boolean {
        let buttonPressed = false;
        if (pins.digitalReadPin(pin) == 0) {
            buttonPressed = true;
        }

        if (returnBoolean) {
            return buttonPressed;
        } else {
            control.raiseEvent(
                EventBusSource.MICROBIT_ID_IO_P0 + pin,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            );
            return false;
        }
    }

    /**
     * Observe button press with specified input pin.
     * Generates an event when the button is pressed.
     * @param pin The input pin to observe.
     */
    // Variant with generating an event
    // Example usage: customExtension.observeButtonPress(pin, false);
    export function ButtonPressEvent(pin: number): void {
        if (pins.digitalReadPin(pin) == 0) {
            control.raiseEvent(
                EventBusSource.MICROBIT_ID_IO_P0 + pin,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            );
        }
    }
}

