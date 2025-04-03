/*
name: Clock
author: popd
*/
import { breeze, mc } from '../breeze_defs';

breeze.registerHud('Clock', 'Shows the time', {
  format: new BooleanSetting("12 hour format", "Switches the clock to be 24 hours", false),
  position: new PositionSetting("Position","Change where the HUD is", 80, 20),
  
  update: function() {
    if (this.format.getValue() = true) {
      this.time = `${new Date().getHours()}:${new Date().getMinutes()}`
    } else {
      hour = function() {
        var shitHour = new Date().getHours()
        if (shitHour > 12) {
          return shitHour - 12
        } else {
          return shitHour
        }
      }
      this.time = `${hour}:${new Date().getMinutes()}`
    }
  },

  draw: function() {
    UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255,255,255))
  }
})
