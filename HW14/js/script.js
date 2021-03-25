const accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
     this.classList.toggle("active");
     this.nextElementSibling.classList.toggle("show");
  };
};
