export function appendSpecialityCard(speciality) {
  const specialityCards = document.querySelector(".speciality_cards");
  
  specialityCards.innerHTML += specialityCardTemplate(speciality.id, speciality.title, speciality.excerpt)
}

function specialityCardTemplate(index, title, excerpt) {
  return `
  <div id="specialities_${index}" class="speciality_card">
    <h3>${title}</h3>
    <p>${excerpt}</p>
    <button class="read_more_button">saiba mais</button>
  </div>
  `
}