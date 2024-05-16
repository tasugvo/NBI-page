import { MyHTMLToolsService } from "../../scripts/services/html_tools.js";

export const Specialities = {};

Specialities.cardTemplate = (index, title, excerpt) => {
  return `
  <div id="specialities_${index}" class="speciality_card">
    <h3>${title}</h3>
    <p>${excerpt}</p>
    <button class="read_more_button btn-white">saiba mais</button>
  </div>
  `
}

Specialities.appendCard = (speciality) => {
  const specialityCards = document.querySelector(".speciality_cards");
  specialityCards.innerHTML += Specialities.cardTemplate(speciality.id, speciality.title, speciality.excerpt)
}

Specialities.updateCarousel = (carouselItems, current) => {
  MyHTMLToolsService.cleanElementInnerHTML("speciality_cards");
  const firstPart = carouselItems.slice(current);
  const secondPart = carouselItems.slice(0, current);
  return firstPart.concat(secondPart);
}