export const Team = {};

Team.create = (teamData) => {
  const team = document.querySelector("#team .team");

  const detailTitle = team.querySelector("h2");
  detailTitle.textContent = teamData.title;
  
  const text = team.querySelector("p")
  if (typeof teamData.detail === "string") {
    text.textContent = teamData.detail;
  } else {
    text.innerHTML = "";
    for (const phrase of teamData.detail) {
      text.innerHTML += `${phrase}<br><br>`
    }
  }

  const buttonText = team.querySelector("button");
  buttonText.textContent = teamData.buttonText;
}