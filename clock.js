/*
name: Clock
author: popd
*/
import { breeze, mc } from '../breeze_defs';

breeze.registerHud('Clock', 'Shows the time', {
  format: new BooleanSetting("12 hour format", "Switches the clock to be 24 hours", false),
  gayText: new BooleanSetting("Cooler Text", "Switches the fancy text", false),
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
    this.position.setWidth(parseInt(this.time.length) * 13.5 + 20)
  },

  background: function() {
    UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255)); // White background
  },
  draw: function() {
    if (this.gayText.getValue() === false) {
      UIRenderer.text(`${this.time}`, this.position.getX() + 10, this.position.getY() + 5, new Color(255, 255, 255, 255), 30);
    }
  },
  drawFancy: function() {
    if (this.gayText.getValue() === true) {
      UIRenderer.text(`${this.time}`, this.position.getX() + 10, this.position.getY() + 5, new Color(255, 255, 255, 255), 30);
    }
  },
});
