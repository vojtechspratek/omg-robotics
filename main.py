@namespace
class omgRobotics:
    """
    
    Set LED state to ON (turn on) for the specified output pin.
    @param pin The output pin to control the LED.
    
    """
    # % blockId=omgroboticssetled
    # % block="(LED)"
    def setLedOn(pin: number):
        pins.digital_write_pin(pin, 1)
    """
    
    Set LED state to OFF (turn off) for the specified output pin.
    @param pin The output pin to control the LED.
    
    """
    def setLedOff(pin2: number):
        pins.digital_write_pin(pin2, 0)