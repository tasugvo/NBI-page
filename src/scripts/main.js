import { chatOnWhatsapp } from "./contact.js";
import { toggleMenu } from "./topmenu.js"

function init() {
  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => toggleMenu())
  }

  const whatsappFixed = document.getElementById("whatsapp_fixed")
  whatsappFixed.addEventListener("click", () => chatOnWhatsapp())
}

init()