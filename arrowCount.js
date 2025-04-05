/*
name: Arrow Count HUD
author: popd
*/

import { breeze, mc } from '../breeze_defs'

breeze.registerHud("Arrow count HUD", "Displays the amount of arrows you have left", {

    position: new PositionSetting("Position", "Change the HUD position", 60, 60),

    update: function() {
        var arrows = 0
        this.arrowCount = 0;

        for (var i = 0; i < 36; i++ ) {
            var stack = inventory.getStackInSlot(i);
            if (stack !== null) {
                if (stack.getItemId() == 262) {
                    arrows += stack.getAmount();
                }
            }
            this.arrowCount = arrows
            this.countLength = `${arrows}`.length * 10
        }
    },

    background: function() {
      UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255));
    },
    draw: function() {
        UIRenderer.remoteTexture("https://static.wikia.nocookie.net/minecraft/images/4/41/Arrow.png/revision/latest/thumbnail/width/360/height/360?cb=20200118044944",
            this.position.getX() + 5, this.position.getY() + 5, 50, 50, 100, 1, new Color(255,255,255,255))
    },
    drawFancy: function() {
        UIRenderer.text(`${this.arrowCount}`, this.position.getX() + this.position.getWidth() - this.countLength - 5, this.position.getY() + this.position.getHeight() - 20,
            new Color(255,255,255,255), 20)
    }
})
