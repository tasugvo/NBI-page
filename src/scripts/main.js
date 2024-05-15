import { fetchDataFromFirebase } from "./firebase/firestore.js";

import { Contact } from "../components/contact/contact.js";
import { Presentation } from "../components/presentation/presentation.js";
import { toggleReadMore, updateReadMoreInfos } from "../components/read_more/read_more.js";
import { Specialities } from "../components/specialities/specialities.js";
import { TopMenu } from "../components/topmenu/topmenu.js";
import { KnowUs } from "../components/knowus/knowus.js";
import { Team } from "../components/team/team.js";
import { Location } from "../components/location/location.js";

export const state ={
  data: null,
  topMenu: {
    items: null
  },
  specialities: {
    current: 0,
    array: []
  }
}

async function init() {
  state.data = await fetchDataFromFirebase("section");

  // TopMenu
  state.topMenu.items = state.data.filter(item => item.index != undefined)
  state.topMenu.items.sort((a, b) => a.index - b.index)
  TopMenu.create(state.topMenu.items)

  const smallMenuItems = document.querySelectorAll(".small_menu>*");
  for (const item of smallMenuItems) {
    item.addEventListener("click", () => TopMenu.toggleMenu());
  }
  // Apresentação
  const presentationData = state.data.find(item => item.id === "presentation").data.info;
  const contactData = state.data.find(item => item.id === "contacts").data
  Presentation.create(presentationData, contactData)

  // Especialidades
  const previousBtn = document.querySelector(".specialities>.card_area>.caret_left.icon");
  previousBtn.addEventListener("click", () => {
    state.specialities.current -= 1;
    if (state.specialities.current == -1) {
      state.specialities.current = state.specialities.array.length - 1
    }
    updateSpecialityCarousel();
  });
  const nextBtn = document.querySelector(".specialities>.card_area>.caret_right.icon");
  nextBtn.addEventListener("click", () => {
    state.specialities.current += 1;
    if (state.specialities.current == state.specialities.array.length) {
      state.specialities.current = 0
    }    
    updateSpecialityCarousel();
  });
  updateSpecialityCarousel();

  // Conheça-nos
  const knowUsData = state.data.find(item => item.id === "knowus").data.info
  KnowUs.create(knowUsData)
  // Equipe
  const teamData = state.data.find(item => item.id === "team").data.info
  Team.create(teamData)
  // Localização
  const locationData = state.data.find(item => item.id === "location")
  Location.create(locationData, contactData)
  // Contatos
  const footerData = state.data.find(item => item.id === "footer").data.info
  Contact.create(footerData, contactData);
  const contacts = ["instagram", "facebook", "whatsapp"];
  const footerIcons = document.querySelectorAll(".icon");
  for (const icon of footerIcons) {
    for (const classItem of icon.classList) {
      if (contacts.includes(classItem)) {
        icon.addEventListener("click", () => Contact.openSocialMediaLink(classItem));
      }
    }
  }
  // Detalhes
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
      
      updateReadMoreInfos(state.data.find(item => item.id === itemType).data.find(item => item.id === itemIndex));
     })
  }
}

init();

function updateSpecialityCarousel() {
  state.specialities.array = Specialities.updateCarousel(state.data.find(item => item.id === "specialities").data, state.specialities.current);
  for (const speciality of state.specialities.array) {
    Specialities.appendCard(speciality);
  }
}
