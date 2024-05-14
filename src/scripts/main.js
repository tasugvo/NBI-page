import { openSocialMediaLink } from "./contact.js";
import { toggleMenu } from "./topmenu.js";
import { state } from "./data.js"
import { appendSpecialityCard } from "./specialities.js";
import { myHTMLToolsService } from "./html_tools.js";
import { toggleReadMore, updateReadMoreInfos } from "./read_more.js";

function init() {
  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => toggleMenu());
  }

  myHTMLToolsService.cleanElementInnerHTML("speciality_cards");
  for (const speciality of state.specialities) {
    appendSpecialityCard(speciality);
  }

  const contacts = ["instagram", "facebook", "whatsapp"];
  const footerIcons = document.querySelectorAll(".icon");
  for (const icon of footerIcons) {
    for (const classItem of icon.classList) {
      if (contacts.includes(classItem)) {
        icon.addEventListener("click", () => openSocialMediaLink(classItem));
      }
    }
  }

  const btnCloseReadMore = document.querySelector(".read_more>.close");
  btnCloseReadMore.addEventListener("click", () => toggleReadMore());

  const fade = document.querySelector(".fade");
  fade.addEventListener("click", () => toggleReadMore());

  const btnOpenReadMore = document.querySelectorAll(".read_more_button");
  for (const button of btnOpenReadMore) {
    // console.log(button.parentElement.id)
    button.addEventListener("click", (event) => {
      toggleReadMore();
      const itemId = event.target.parentNode.id;
      const itemType = itemId.split("_")[0];
      const itemIndex = Number(itemId.split("_")[1]);

      updateReadMoreInfos(state[itemType].find(item => item.id === itemIndex));
     })
  }
}

init();