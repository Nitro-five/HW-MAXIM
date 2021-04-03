function Accordion(containerEl, config) {
  this.containerEl = containerEl;
  this.config = config || {};
  this.init();
}

Accordion.prototype.init = function () {
  this.containerEl.classList.add("accord_container");

  Array.prototype.forEach.call(this.containerEl.children, (e) => {
    e.classList.add("accord_item");
    e.children[0].classList.add("title");
    e.children[1].classList.add("accordion-content");
  });

  this.containerEl.addEventListener("click", this.onItemClick.bind(this));
};

Accordion.prototype.onItemClick = function (e) {
  if (!e.target.classList.contains("title")) return;

  if (this.config.affective) {
    Array.prototype.forEach.call(this.containerEl.children, (e) => {
      e.children[1].classList.remove("active");
    });
  }
  e.target.nextElementSibling.classList.toggle("active");
};
