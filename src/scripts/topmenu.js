export function toggleMenu() {
  const largeMenu = document.querySelector(".large_menu");
  const isOpen = largeMenu.classList.contains("dropdown")
  if (isOpen) {
    largeMenu.classList.remove("dropdown")
  } else {
    largeMenu.classList.add("dropdown")
  }
}