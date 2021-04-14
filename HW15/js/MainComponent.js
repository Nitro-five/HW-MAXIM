class MainComponent {
  _userData = null;

  constructor(template, containerEl) {
    this.template = template;
    this.containerEl = containerEl;
  }
  init() {
    this.containerEl.innerHTML = this.template;
  }
}
