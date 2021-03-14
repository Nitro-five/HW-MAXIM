const btnEl=document.getElementsByClassName('btn-item');

Array.from(btnEl).forEach(e =>{
   e.addEventListener('click',btn(e));
});

function btn(e) {
   let a = 0;
   let b = 1;
   return() => {
      a= a+b;
      b=a-b;
      e.nextElementSibling.innerText = a;
      console.log(a)
   }
}