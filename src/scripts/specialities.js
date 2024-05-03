export function appendSpecialityCard(index, speciality) {
  const specialityCards = document.querySelector(".speciality_cards");
  specialityCards.innerHTML += specialityCardTemplate(index, speciality.title, speciality.excerpt)
}

function specialityCardTemplate(index, title, excerpt) {
  return `
  <div id="speciality_card_${index}" class="speciality_card">
    <h3>${title}</h3>
    <p>${excerpt}</p>
    <button>saiba mais</button>
  </div>
  `
}