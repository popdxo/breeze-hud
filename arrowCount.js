/*
name: Arrow Count HUD
author: popd
*/

import { breeze, mc } from '../breeze_defs'

breeze.registerHud("Arrow count HUD", "Displays the amount of arrows you have left", {
  
  position: new PositionSetting("Position", "Change the HUD position", 50, 50),
  
  /*update: function() {
    this.arrowCount = 0

    for (let i = 0; i < 36; i++ ) {
      const stack = inventory.getStackInSlot(i)

      if (stack !== null) {
        if ( stack.getItemId() == 262 ) {
          this.arrowCount += stack.getAmount()
        }
      }

    }

  },*/

  //background: function() {
  //  UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255));
  //},
  //draw: function() {
  //  
  //},
  drawFancy: function() {
    UIRenderer.text(`${this.arrowCount}`, this.position.getX(), this.position.getY(), new Color(255,255,255,255))
  }
})
