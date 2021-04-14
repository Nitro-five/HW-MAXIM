const contentEl = document.getElementById("content");

const loginComponent = new LoginComponent(
  document.getElementById("login-template").innerText,
  contentEl
);

loginComponent.init();

const mainComponent = new MainComponent(
  document.getElementById("main-template").innerText,
  contentEl
);

loginComponent.init();

function onSuccessLogin() {
  loginComponent.dispose();
  mainComponent.init();
}
