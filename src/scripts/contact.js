export function openSocialMediaLink(socialMedia) {
  console.log(socialMedia)
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
  window.open(link, "_blank")
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