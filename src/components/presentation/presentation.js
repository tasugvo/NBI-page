import { StringService } from "../../scripts/services/string_tools.js";

export const Presentation = {};

Presentation.create = (presentationData, contactData) => {
  const presentation = document.querySelector("#presentation .presentation");

  const title = presentation.querySelector("h1");
  title.textContent = presentationData.title;

  const detail = presentation.querySelector(".detail"); 
  detail.textContent = presentationData.detail;

  const buttonText = presentation.querySelector("button .button_text");
  buttonText.textContent = presentationData.buttonText;

  const whatsappNumber = presentation.querySelector("button .whatsapp");
  whatsappNumber.textContent = StringService.formatAsPhoneNumber(contactData.find(contact => contact.name === "whatsapp").number)
}