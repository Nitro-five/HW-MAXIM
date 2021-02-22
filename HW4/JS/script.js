alert('Hi!');
let working;
let history=[];

do{
   const result = doCalculation();
   if(result){
      history.push(result);
      alert(`Result is ${result.operationResult}`);
   }
   working=confirm('Do u want to do some other operation?');
} while(working);

function doCalculation(){
   const operation = requestOperation();
   if(operation ==='history') {
      const formattedHistory = formatHistory(history);
      console.log(formattedHistory);
      alert(formattedHistory);
      return;
   }

let secondOperand;

const firstOperand = +prompt('Write number');

let result={
   operation: operation,
   operands:[firstOperand]
};

switch(operation){
   case'+':
   case'-':
   case'*':
   case'/':
   secondOperand = +prompt('Write second number');
   result.operands.push(secondOperand);
   break;
}

let operationResult;
switch(operation){
   case'+':
   operationResult = sum(firstOperand,secondOperand);
   break;
   case'-':
   operationResult = diff(firstOperand,secondOperand);
   break;
   case'*':
   operationResult = mult(firstOperand,secondOperand); 
   break;
   case'/':
   operationResult = div(firstOperand,secondOperand); 
   break;
   case 'sin':
   operationResult = Math.sin(firstOperand); 
   break;
   }
   result.operationResult = operationResult;
   return result;
}

function formatHistory(list){
   let formatResult = '';
   for (let i=0; i < list.length;i++) {
      formatResult += `${i + 1}. Operation ${list[i].operation},operands ${list[i].operands},result${list[i].operationResult} \n `;
   }
   return formatResult;
}

function requestOperation() {
   let operation;
   while(!operation) {
      let response = prompt ('Select an operation (+,-,*,/,sin,history):');
      switch(response){
         case'+':
         case'-':
         case'*':
         case'/':
         case 'sin':
         case 'history':
            operation=response;
            break;
      }
   }
   return operation;
}

function sum(a,b){
   return a+b;
}
function diff(a,b){
   return a-b;
}

function mult(a,b){
   return a*b;
}

function div(a,b){
   return a/b;
}