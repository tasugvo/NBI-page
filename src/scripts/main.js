import { openSocialMediaLink } from "./contact.js";
import { toggleMenu } from "./topmenu.js";
import { state } from "./data.js"
import { appendSpecialityCard } from "./specialities.js";
import { myHTMLToolsService } from "./html_tools.js";

function init() {
  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => toggleMenu());
  }

  myHTMLToolsService.cleanElementInnerHTML("speciality_cards")
  for (const i in state.specialities) {
    appendSpecialityCard(i, state.specialities[i])
  }

  const contacts = ["instagram", "facebook", "whatsapp"]
  const footerIcons = document.querySelectorAll(".icon")
  for (const icon of footerIcons) {
    for (const classItem of icon.classList) {
      if (contacts.includes(classItem)) {
        icon.addEventListener("click", () => openSocialMediaLink(classItem));
      }
    }
  }
}

init();