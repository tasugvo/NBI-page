import { StringService } from "../../scripts/services/string_tools.js";

export const Location = {};

Location.create = (locationData, contactData) => {
  const location = document.querySelector("#location .location .location_detail");
  
  const address = location.querySelector(".address");

  const addressTitle = address.querySelector("h2");
  addressTitle.textContent = `${locationData.address.name}:`;
  
  const street = address.querySelector(".street");
  street.textContent = `${locationData.address.street},`;
     
  const number = address.querySelector(".number");
  number.textContent = `${locationData.address.number} -`;
        
  const neighborhood = address.querySelector(".neighborhood");
  neighborhood.textContent = `${locationData.address.neighborhood},`;
           
  const city = address.querySelector(".city");
  city.textContent = `${locationData.address.city} -`;
           
  const UF = address.querySelector(".UF");
  UF.textContent = `${locationData.address.UF},`;
    
  const CEP = address.querySelector(".CEP");
  CEP.textContent = `CEP: ${locationData.address.CEP}`;
   
  const phone = location.querySelector(".phone");

  const phoneTitle = phone.querySelector("h2");
  phoneTitle.textContent = `${locationData.phone.name}:`;

  const phoneText = phone.querySelector(".text");
  phoneText.textContent = `${locationData.phone.text}:`;

  const phoneNumbers = phone.querySelector(".phone_numbers")
  const contactsToShow = contactData.filter(contact => contact.number != undefined)
  for (const contact of contactsToShow) {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = "src/assets/icons/phone.svg";
    img.alt = "telefone";
    div.appendChild(img);

    const span = document.createElement("span");
    span.textContent = StringService.formatAsPhoneNumber(contact.number);
    div.appendChild(span)

    phoneNumbers.appendChild(div)
  }
}
