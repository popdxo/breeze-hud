/*
name: CPS counter
author: popd + skidded from example scripts
*/

var lCpsList = [];
var rCpsList = [];

breeze.registerHud('CPSCounter', 'Shows your cps in a hud component', {
    position: new PositionSetting("Position", "The position of the CPS counter (I recommend putting this above the keystrokes HUD)", 170, 30),

    update: function() {
        breeze.log("TEST")
        lCpsList = lCpsList.filter(timer => !timer.hasPassed(1000));
        rCpsList = rCpsList.filter(timer => !timer.hasPassed(1000));

        // Adjust the width of the HUD based on the number of digits in the cps count
        this.lNumberLength = lCpsList.length > 9 ? 10 : 5
        this.rNumberLength = rCpsList.length > 9 ? 10 : 5
    },

    background: function() {
        UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth() / 2 - 3, 30, 5, new Color(255, 255, 255, 255));
        UIRenderer.roundedRectangle(this.position.getX() + this.position.getWidth() /2 + 3, this.position.getY(), this.position.getWidth() / 2 - 3, 30, 5, new Color(255, 255, 255, 255));
    },

    input: function(event) {
        if (event.getKeycode() === -2) { // -2 corresponds to the Left mouse button
            lCpsList.push(new Timer());
        } else if (event.getKeycode() === -3 ) {
            rCpsList.push(new Timer());
        }
    },

    drawFancy: function() {
        UIRenderer.text(lCpsList.length, this.position.getX() + this.position.getWidth() / 4 - this.lNumberLength, this.position.getY() + 5, new Color(255, 255, 255, 255), 22);
        UIRenderer.text(rCpsList.length, this.position.getX() + this.position.getWidth() * 0.75 - this.rNumberLength, this.position.getY() + 5, new Color(255, 255, 255, 255), 22);
    }
});
