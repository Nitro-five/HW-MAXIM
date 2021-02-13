const firstNumber = prompt('Hi! Write your first number', );
const secondNumber = prompt('Write your second number', );
// операции 
const sumNumber = (Number(firstNumber)+Number(secondNumber));
const diffNumber = (Number(firstNumber)-Number(secondNumber));
const mulNumber = (Number(firstNumber)*Number(secondNumber));
const divNumber = (Number(firstNumber)/Number(secondNumber));
// преведение типов 
console.log(String(firstNumber), String(secondNumber), String(sumNumber),String(diffNumber),String(mulNumber),String(divNumber));
// модалка
alert(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${sumNumber}\nDiff:${firstNumber}-${secondNumber}=${diffNumber}\nMult:${firstNumber}*${secondNumber}=${mulNumber}\nDiv:${firstNumber}/${secondNumber}=${divNumber} `);
// консоль
console.log(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${sumNumber}\nDiff:${firstNumber}-${secondNumber}=${diffNumber}\nMult:${firstNumber}*${secondNumber}=${mulNumber}\nDiv:${firstNumber}/${secondNumber}=${divNumber} `);