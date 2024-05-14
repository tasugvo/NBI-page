import { openSocialMediaLink } from "./contact.js";
import { toggleMenu } from "./topmenu.js";
import { state } from "./data.js"
import { appendSpecialityCard } from "./specialities.js";
import { myHTMLToolsService } from "./html_tools.js";
import { toggleReadMore, updateReadMoreInfos } from "./read_more.js";

const controlPanel ={
  specialities: {
    current: 0,
    array: []
  }
}

function init() {
  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => toggleMenu());
  }

  
  
  const previousBtn = document.querySelector(".specialities>.card_area>.caret_left.icon");
  previousBtn.addEventListener("click", () => {
    controlPanel.specialities.current -= 1;
    if (controlPanel.specialities.current == -1) {
      controlPanel.specialities.current = controlPanel.specialities.array.length - 1
    }
    updateSpecialityCarousel();
  });
  const nextBtn = document.querySelector(".specialities>.card_area>.caret_right.icon");
  nextBtn.addEventListener("click", () => {
    controlPanel.specialities.current += 1;
    if (controlPanel.specialities.current == controlPanel.specialities.array.length) {
      controlPanel.specialities.current = 0
    }    
    updateSpecialityCarousel();
  });

  updateSpecialityCarousel();

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

function updateSpecialityCarousel() {
  myHTMLToolsService.cleanElementInnerHTML("speciality_cards");
  const firstPart = state.specialities.slice(controlPanel.specialities.current);
  const secondPart = state.specialities.slice(0, controlPanel.specialities.current);
  controlPanel.specialities.array = firstPart.concat(secondPart);
  for (const speciality of controlPanel.specialities.array) {
    appendSpecialityCard(speciality);
  }
}
