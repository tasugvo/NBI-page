export const MyHTMLToolsService = {}

MyHTMLToolsService.cleanElementInnerHTML = (name, multiple) => {
  let element;
  if (multiple) {
    element = document.querySelectorAll(`.${name}`)
    if (element.length > 0) {
      for (const el of element) {
        el.innerHTML = ""
      }
    }
  }
  element = document.querySelector(`.${name}`)
  if (element) {
    element.innerHTML = ""
    return
  } else {
    element = document.querySelector(`#${name}`)
    if (element) {
      element.innerHTML = ""
      return
    }
  }

}