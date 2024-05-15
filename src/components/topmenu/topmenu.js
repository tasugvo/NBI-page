export const TopMenu = {};

TopMenu.create = (menuItems) => {
  const largeMenu = document.querySelector(".large_menu")
  largeMenu.innerHTML = ""
  for (const key of menuItems) {
    const button = document.createElement("button");
    const anchor = document.createElement("a");
    anchor.textContent = key.name;
    anchor.href = `#${key.sectionRef}`;
    button.appendChild(anchor);
    largeMenu.appendChild(button);
  }
}

TopMenu.toggleMenu = () => {
  const largeMenu = document.querySelector(".large_menu");
  const isOpen = largeMenu.classList.contains("dropdown")
  if (isOpen) {
    largeMenu.classList.remove("dropdown")
  } else {
    largeMenu.classList.add("dropdown")
  }
}