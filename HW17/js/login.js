class LoginComponent {
  _formEl = null;
  _emInptEl = null;
  _pssInptEl = null;
  _alertEl = null;

  constructor(template, contentEl, onLoginCb) {
    this.template = template;
    this.contentEl = contentEl;
    this.onLogin = onLoginCb;
  }

  init() {
    this.contentEl.innerHTML = this.template;

    this._formEl = this.contentEl.querySelector("#login-form");
    this._emInptEl = this.contentEl.querySelector(".inputEm");
    this._pssInptEl = this.contentEl.querySelector(".inpt-password");
    this._alertEl = this.contentEl.querySelector(".active");

    this._formEl.addEventListener("submit", this.resetDefault);
    this._formEl.addEventListener("submit", this.onLoginSbt);
  }

  resetDefault(evt) {
    evt.preventDefault();
  }

  dispose() {
    this._formEl.removeEventListener("submit", this.resetDefault);
    this._formEl.removeEventListener("submit", this.onLoginSbt);
  }

  onLoginSbt = () => {
    this._alertEl.classList.add("alert");
    const result = this.sendUserCreden(
      this._emInptEl.value,
      this._pssInptEl.value
    );
    result.then((e) => {
      if (e.ok) {
        if (this.onLogin) {
          this.onLogin();
        }
      } else {
        this._alertEl.classList.remove("alert");
      }
    });
    result.catch((e) => {
      this._alertEl.classList.remove("alert");
    });
  };

  sendUserCreden(login, password) {
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
}
