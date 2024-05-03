export function chatOnWhatsapp() {
  let phoneNumber = "5571993210108";
  const defaultMessage = "Olá Danilo, estava dando uma olhada no seu portfólio e resolvi te contactar."
  let whatsappLink;
  if (isMobileDevice()) {
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
  } else {
    whatsappLink = `https://web.whatsapp.com/send?phone=+${phoneNumber}`;
  }
  window.open(whatsappLink, "_blank")
}

function isMobileDevice() {
  const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'windows phone'];
  const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));

  return supportsTouch || isMobileUserAgent;
}