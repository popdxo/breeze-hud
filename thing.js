/*
name: armor ui
author: popd
*/

import { breeze, mc } from '../breeze_defs';

const armor = {
  // leather
  298: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/49/Leather_Cap_(item)_JE3_BE2.png",
  299: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/Leather_Tunic_(item)_JE4_BE3.png",
  300: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Leather_Pants_(item)_JE3_BE2.png",
  301: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/Leather_Boots_%28item%29_JE3_BE2.png",
  // chainmail
  302: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/Chainmail_Helmet_(item)_JE1_BE1.png",
  303: "https://minecraft.wiki/images/Chainmail_Chestplate_(item)_JE1_BE1.png",
  304: "https://minecraft.wiki/images/Chainmail_Leggings_(item)_JE1_BE1.png",
  305: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Chainmail_Boots_(item)_JE1_BE1.png",
  // iron
  306: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Iron_Helmet_(item)_JE2_BE2.png",
  307: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Iron_Chestplate_(item)_JE2_BE2.png",
  308: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1c/Iron_Leggings_(item)_JE2_BE2.png",
  309: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/88/Iron_Boots_(item)_JE1_BE1.png",
  // diamond
  310: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/Diamond_Helmet_(item)_JE3_BE3.png",
  311: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3d/Diamond_Chestplate_(item)_JE2_BE2.png",
  312: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/Diamond_Leggings_(item)_JE3_BE3.png",
  313: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/01/Diamond_Boots_(item)_JE3_BE3.png",
  // gold
  314: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/67/Golden_Helmet_(item)_JE3_BE3.png",
  315: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Golden_Chestplate_(item)_JE3_BE3.png",
  316: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Golden_Leggings_(item)_JE3_BE3.png",
  317: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c5/Golden_Boots_(item)_JE3_BE3.png",
}

function getImg(itemId) {
  return armor[itemId] || "";
}

function slotIdCheck(slotId) {
  stack = inventory.getStackInSlot(slotId)
  if (stack !== null ) {
    return getImg(stack.getItemId());
  } else {
    return ""
  }
}

breeze.registerHud('Armor display', 'Shows your armor in a HUD', {

    position: new PositionSetting("Position", "Change where the HUD is", 60, 240 ),

    update: function() {
      
      this.bootImg = slotIdCheck(36);
      this.leggingImg = slotIdCheck(37);
      this.chestplateImg = slotIdCheck(38);
      this.helmetImg = slotIdCheck(39);
    },

    background: function() {
        UIRenderer.roundedRectangle(this.position.getX(), this.position.getY(), this.position.getWidth(), this.position.getHeight(), 5, new Color(255, 255, 255, 255)); // White background
    },

    draw: function() {
        UIRenderer.remoteTexture(this.helmetImg , this.position.getX() + 5, this.position.getY() + 5, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.chestplateImg , this.position.getX() + 5, this.position.getY() + 65, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.leggingImg , this.position.getX() + 5, this.position.getY() + 125, 50, 50, 100, 1, new Color(255, 255, 255, 255));
        UIRenderer.remoteTexture(this.bootImg , this.position.getX() + 5, this.position.getY() + 185, 50, 50, 100, 1, new Color(255, 255, 255, 255));
    },
});
