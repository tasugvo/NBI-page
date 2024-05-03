import { chatOnWhatsapp } from "./contact.js";
import { toggleMenu } from "./topmenu.js";
import { state } from "./data.js"
import { appendSpecialityCard } from "./specialities.js";
import { myHTMLToolsService } from "./html_tools.js";

function init() {
  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => toggleMenu());
  }

  const whatsappFixed = document.getElementById("whatsapp_fixed");
  whatsappFixed.addEventListener("click", () => chatOnWhatsapp());

  myHTMLToolsService.cleanElementInnerHTML("speciality_cards")
  for (const i in state.specialities) {
    appendSpecialityCard(i, state.specialities[i])
  }
}

init();