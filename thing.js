/*
name: armor ui
author: popd
*/

import { breeze, mc } from '../breeze_defs';

const armor = {
  // leather
  298: "https://raw.githubusercontent.com/popdxo/breeze-hud/refs/heads/main/leather-helmet.png",
  299: "https://raw.githubusercontent.com/popdxo/breeze-hud/refs/heads/main/leather-chestplate.png",
  300: "https://raw.githubusercontent.com/popdxo/breeze-hud/refs/heads/main/leather-leggings.png",
  301: "https://raw.githubusercontent.com/popdxo/breeze-hud/refs/heads/main/leather-boots.png",
  // chainmail
  302: "",
  303: "",
  304: "",
  305: "",
  // iron
  306: "",
  307: "",
  308: "",
  309: "",
  // diamond
  310: "",
  311: "",
  312: "",
  313: "",
  // gold
  314: "",
  315: "",
  316: "",
  317: "",
}

function getImg(itemId) {
  return armorImages[itemId] || "";
}

function slotIdCheck(slotId) {
  stack = inventory.getStackInSlot(slotId)
  if (stack !== null ) {
    if ( slotId == 36 ) {
      this.bootImg = getImg(stack.getItemId());
    } else if (37) {
      this.leggingImg = getImg(stack.getItemId());
    } else if (38) {
      this.chestplateImg = getImg(stack.getItemId());
    } else {
      this.helmetImg = getImg(stack.getItemId());
    }
  }
}

breeze.registerHud('Armor display', 'Shows your armor in a HUD component', {
    position: new PositionSetting("Position", "The position of the FPS counter", 60, 290),
    
    update: function() {
      /*
      slotIdCheck(36);
      slotIdCheck(37);
      slotIdCheck(38);
      slotIdCheck(39);
      */
    },

    background: function() {
        // Draw the background rectangle for the HUD
        UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255)); // White background
    },

    draw: function() {
        UIRenderer.remoteTexture(this.helmetImg , this.position.getX() + 5, this.position.getY() + 5, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.chestplateImg , this.position.getX() + 5, this.position.getY() + 75, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.leggingImg , this.position.getX() + 5, this.position.getY() + 145, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.bootImg , this.position.getX() + 5, this.position.getY() + 215, 50, 50, 100, 1, new Color(255, 255, 255, 255));
    },
});
