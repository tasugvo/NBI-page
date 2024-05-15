export const Contact = {};

Contact.create = (footerData, contactData) => {
  const footer = document.querySelector("footer .social_media");

  const text = footer.querySelector(".text");
  text.textContent = footerData.text;

  const iconsArea = footer.querySelector(".icons_area");
  for (const item of contactData) {
    if (item.url) {
      const image = document.createElement("img");
      image.classList.add(item.name);
      image.classList.add("icon")
      image.src = `src/assets/icons/${item.name}.svg`;
      image.alt = item.name;
      iconsArea.appendChild(image)
    }
  }


  const linkText = footer.querySelector(".link_text");
  linkText.textContent = footerData.linkText;

}

Contact.openSocialMediaLink = (socialMedia) => {
  let link;
  switch (socialMedia) {
    case "facebook":
      link = "https://www.facebook.com/nbi.implantesdentarios/";
      break
    case "instagram":
      link = "https://www.instagram.com/nbi.implantesdentarios/";
      break
    case "whatsapp":
      link = chatOnWhatsapp();
      break
    default:
      link = "#"
  }
  window.open(link, "_blank");
}

function chatOnWhatsapp() {
  let phoneNumber = "5571996758432";
  const defaultMessage = ""
  let whatsappLink;
  if (isMobileDevice()) {
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
  } else {
    whatsappLink = `https://web.whatsapp.com/send?phone=+${phoneNumber}`;
  }
  return whatsappLink
}

function isMobileDevice() {
  const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'windows phone'];
  const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));

  return supportsTouch || isMobileUserAgent;
}