export const KnowUs = {};

KnowUs.create = (knowUsData) => {
  const knowUs = document.querySelector("#know_us .know_us");

  const detailTitle = knowUs.querySelector(".details h2");
  detailTitle.textContent = knowUsData.title;
  
  const text = knowUs.querySelector(".details p")
  text.textContent = knowUsData.detail;

  const buttonText = knowUs.querySelector(".details button a");
  buttonText.textContent = knowUsData.buttonText;
}