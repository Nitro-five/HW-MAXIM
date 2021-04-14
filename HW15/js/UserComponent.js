class UserListComponent {
   _user = [];

   constructor(listTemplate, itemTemplate, containerEl) {
       this.listTemplate = listTemplate;
       this.itemTemplate = itemTemplate;
       this.containerEl = containerEl;
   }

   init() {
       this.containerEl.innerHTML = this.listTemplate;

       this.loadData().then(response => {
           this._user = [...this._user, ...response.data];
           console.log(this._user);
           const userEls = this._user.map(e => this.generateUserRow(e));
           this.containerEl.querySelector('tbody').append(...userEls); // ...[tr, tr, tr] -> tr, tr, tr
       });
   }

   generateUserRow(user) {
       const userRowEl = document.createElement('tr');
       userRowEl.innerHTML = this.itemTemplate
           .replaceAll('{{id}}', user.id)
           .replaceAll('{{name}}', user.first_name)
           .replaceAll('{{surname}}', user.last_name)
           .replaceAll('{{email}}', user.email);
       userRowEl.dataset['id'] = user.id;

       // const scopeEl = document.createElement('th');
       // scopeEl.attributes['scope'] = 'row';
       // scopeEl.innerText = user.id;

       // const nameEl = document.createElement('td');
       // nameEl.innerText = user.first_name;

       // const surnameEl = document.createElement('td');
       // surnameEl.innerText = user.last_name;

       // const emailEl = document.createElement('td');
       // emailEl.innerText = user.email;

       // userRowEl.append(
       //     scopeEl,
       //     nameEl,
       //     surnameEl,
       //     emailEl
       // );

       return userRowEl;
   }

   loadData() {
       return fetch('https://reqres.in/api/users').then(e => e.json());
   }
}