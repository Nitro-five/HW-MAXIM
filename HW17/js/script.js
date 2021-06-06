const сontentEl = document.getElementById("content");

const loginComponent = new LoginComponent(
  document.getElementById("login-template").innerText,
  сontentEl,
  onSuccsesLogin
);
const userListComponent = new UserListcomponent(
  document.getElementById("user-list-template").innerText,
  сontentEl
);

loginComponent.init();

function onSuccsesLogin() {
  loginComponent.dispose();
  userListComponent.init();
}
