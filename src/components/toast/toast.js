export const Toast = {
  self: document.querySelector(".toast"),
  title: document.querySelector(".toast h1.title"),
  message: document.querySelector(".toast span.message"),
};

Toast.update = (title, message) => {
  Toast.title.textContent = title.toUpperCase();
  Toast.message.textContent = message;
}

Toast.open = (title, message) => {
  Toast.update(title, message);
  Toast.self.classList.add("rise_animation");
  Toast.self.classList.remove("hide");
  Toast.self.addEventListener("animationend", () => {
    Toast.self.classList.remove("rise_animation");
    Toast.self.classList.add("hide");
  }, {
    once: true
  })
}