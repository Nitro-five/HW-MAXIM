class UserListcomponent {
  constructor(template, contentEl) {
    this.contentEl = contentEl;
    this.template = template;
  }

  init() {
    this.contentEl.innerHTML = this.template;
    this.loadData().then((response) => {
      const UserssEl = response.data.map((e) => this.createUserList(e));
      this.contentEl.querySelector("#user-list").append(...UserssEl);
      console.log(this.contentEl.querySelector("#user-list"));
    });
  }

  loadData() {
    return fetch("https://reqres.in/api/users").then((e) => e.json());
  }

  createUserList(user) {
    const listEl = document.createElement("li");
    const listContentEl = document.createElement("span");
    const avatar = document.createElement("img");
    avatar.src = user.avatar;
    listContentEl.innerText = `name: ${user.first_name}
	 lastname: ${user.last_name}
	 email: ${user.email}`;
    listEl.append(listContentEl);
    listEl.prepend(avatar);
    return listEl;
  }
}
