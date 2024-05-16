export const Login = {};

Login.toggle = () => {
  const loginBox = document.querySelector(".login_box");
  const fade = document.querySelector(".login_box_fade");
  fade.addEventListener("click", () => Login.toggle());
  const isClosed = loginBox.classList.contains("hide");
  if (isClosed) {
    loginBox.classList.remove("hide");
    fade.classList.remove("hide");
  } else {
    loginBox.classList.add("hide");
    fade.classList.add("hide");
  }
}