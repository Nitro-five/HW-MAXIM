class LoginComponent {
  _formEl = null;
  _loginInputEl = null;
  _passwordInputEl = null;
  _messageEl = null;

  _loginService = null;

  constructor(template, containerEl) {
    this.template = template;
    this.containerEl = containerEl;
  }
  init() {
    this.containerEl.innerHTML = this.template.replace(
      "{{message}}",
      "Incorrect credentials, please check one and try again!"
    );

    this._formEl = this.containerEl.querySelector("#login-form");
    this._loginInputEl = this.containerEl.querySelector("#email-input");
    this._passwordInputEl = this.containerEl.querySelector("#pass-input");
    this._messageEl = this.containerEl.querySelector("#message");

    this._formEl.addEventListener("submit", this.resetDefault);
    this._formEl.addEventListener("submit", this.onLoginSubmit);
  }
  dispose() {
    this._formEl.removeEventListener("submit", this.resetDefault);
    this._formEl.removeEventListener("submit", this.onLoginSubmit);
  }
  onLogin() {
    onSuccessLogin();
  }
  resetDefault(evt) {
    evt.preventDefault();
  }

  checkUserData(login, password) {
    return fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: login,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  }
  onLoginSubmit = () => {
    this._messageEl.classList.add("hide");

    const result = this.checkUserData(
      this._loginInputEl.value,
      this._passwordInputEl.value
    );

    result.then((e) => {
      console.log("then", e);
      if (e.ok) {
        if (this.onLogin) {
          this.onLogin();
        }
      } else {
        this._messageEl.classList.remove("hide");
      }
      return e.json();
    });
    result.catch((e) => {
      this._messageEl.classList.remove("hide");
    });
  };
}
