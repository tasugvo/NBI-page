import { FireAuth } from "../../scripts/firebase/authentication.js";
import { Toast } from "../toast/toast.js";

export const Login = {
  box: document.querySelector(".login_box"),
  fade: document.querySelector(".login_box_fade"),
  email: document.querySelector("#login_email"),
  password: document.querySelector("#login_password"),
  unlogged: document.querySelector(".login_box .unlogged"),
  logged: document.querySelector(".login_box .logged"),
  handleKey: (event) => {
    if (event.key === "Enter") {
      Login.enter();
    }
    if (event.key === "Escape") {
      Login.toggle();
    }
  }
};

Login.toggle = () => {
  Login.fade.addEventListener("click", () => Login.toggle());
  const isClosed = Login.box.classList.contains("hide");

  if (isClosed) {
    Login.box.classList.remove("hide");
    Login.fade.classList.remove("hide");
    window.addEventListener("keydown", Login.handleKey);
  } else {
    Login.box.classList.add("hide");
    Login.fade.classList.add("hide");
    window.removeEventListener("keydown", Login.handleKey);
  }
}

Login.enter = async (user) => {
  const email = Login.email.value;
  const password = Login.password.value;
  
  const response = await FireAuth.signIn(email, password);
  if (typeof response === "string") {
    Toast.open("Erro", response);
  } else {
    Toast.open("Sucesso", "Autenticação realizada");
    toggleEditButtons()
    Login.logged.classList.remove("hide");
    Login.unlogged.classList.add("hide");
    user = response.uid
    Login.toggle()
  }
}

Login.exit = async (user) => {
  const response = await FireAuth.signOut();
  if (response) {
    Toast.open("Erro", response);
  } else {
    Toast.open("Sucesso", "Checkout realizado");
    toggleEditButtons()
    Login.logged.classList.add("hide");
    Login.unlogged.classList.remove("hide");
    user = response;
    Login.toggle()
  }
}

function toggleEditButtons() {
  const editButtons = document.querySelectorAll(".edit.icon");
  for (const editButton of editButtons) {
    if (editButton.classList.contains("hide")) {
      editButton.classList.remove("hide");
    } else {
      editButton.classList.add("hide");
    }
  }
}