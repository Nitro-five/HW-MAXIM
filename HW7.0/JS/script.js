const inputEl = document.createElement('input');
const firstHeadEl = document.getElementsByClassName('bar') [0];
const ulEl = document.getElementsByTagName('ul')[0];
const button = document.createElement('button');

button.innerText = 'Click';
button.addEventListener('click' , onButtonClick,)

firstHeadEl.append(button);
function onButtonClick () {
   const LiEl = document.createElement('li');
   const inputTaker = document.getElementsByName('inputEl').value;
  // document.getElementsByTagName('LiEl').innerHTML = inputTaker;
   LiEl.innerHTML = inputTaker;
  

   ulEl.appendChild(LiEl);
}
// let val = document.getElementsByTagName('button').value;
//document.getElementsByTagName('input').value;