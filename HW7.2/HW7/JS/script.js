const inputEl = document.createElement('input');
const firstHeadEl = document.getElementsByClassName('bar') [0]; 
firstHeadEl.append(inputEl);
const ulEl = document.getElementsByTagName('ul')[0];
const button = document.createElement('button');

button.innerText = 'Click';
button.addEventListener('click' , onButtonClick,)

firstHeadEl.append(button);
ulEl.prepend(inputEl);

function onButtonClick () {
   const LiEl = document.createElement('li');
   const textLi= inputEl.value;
   LiEl.innerText = textLi;
   ulEl.appendChild(LiEl);
}
// let val = document.getElementsByTagName('button').value;
//document.getElementsByTagName('input').value;
// const inputTaker = document.getElementsByTagName('input').value;
   //document.getElementsByTagName('LiEl').innerHTML = inputTaker;
   //LiEl.innerHTML = inputTaker;