/*
name: Clock
author: popd
*/
import { breeze, mc } from '../breeze_defs';

breeze.registerHud('Clock', 'Shows the time', {
  format: new BooleanSetting("12 hour format", "Switches the clock to be 24 hours", false),
  position: new PositionSetting("Position", "Change where the HUD is", 80, 40),
  
  update: function() {

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    if (this.format.getValue() === false) {

      this.time = `${hours}:${formattedMinutes}`;
    } else {

      const hour12 = hours > 12 ? hours - 12 : hours;
      this.time = `${hour12}:${formattedMinutes}`;
    }

  },

  background: function() {
    UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255)); // White background
  },
  draw: function() {
    UIRenderer.text(`${this.time}`, this.position.getX() + 5, this.position.getY() + 5, new Color(255, 255, 255, 255), 30);
  },
});
