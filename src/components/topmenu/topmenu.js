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

TopMenu.toggle = () => {
  const largeMenu = document.querySelector(".large_menu");
  const fade = document.querySelector(".large_menu_fade");
  fade.addEventListener("click", () => TopMenu.toggle());
  const isOpen = largeMenu.classList.contains("dropdown");
  if (isOpen) {
    largeMenu.classList.remove("dropdown");
    fade.classList.add("hide");
  } else {
    largeMenu.classList.add("dropdown");
    fade.classList.remove("hide");
  }
}