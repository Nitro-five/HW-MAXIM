// запрос 
const firstNumber = +prompt('Hi! Write your first number', );
const secondNumber = +prompt('Write your second number', );

//const mathFunction = function(a,b,operation) {
  // return operation (a,b);
//};

//чему будет равно 
const resultSum =  function(a,b) {
   return a+b;
};
const resultDiff = function(a,b) {
   return a-b;
};

const resultMult = function (a,b) {
   return a*b;
};
const resultDiv = function (a,b){
   return a/b;
};

// модалка
alert(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${resultSum}\nDiff:${firstNumber}-${secondNumber}=${resultDiff}\nMult:${firstNumber}*${secondNumber}=${resultMult}\nDiv:${firstNumber}/${secondNumber}=${resultDiv} `);
// консоль
console.log(`Calculations are finished!\nSum:${firstNumber}+${secondNumber}=${resultSum}\nDiff:${firstNumber}-${secondNumber}=${resultDiff}\nMult:${firstNumber}*${secondNumber}=${resultMult}\nDiv:${firstNumber}/${secondNumber}=${resultDiv} `);