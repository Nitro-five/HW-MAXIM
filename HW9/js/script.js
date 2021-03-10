const selectEl = document.getElementById("select");
const firstOperandEl = document.getElementById("first-number");
const secondOperandEl = document.getElementById("second-number");
const btnEl = document.getElementById("button-calc");
const listEl = document.getElementById("list");
const inputContainerEl = document.getElementById("input");
const liTemplate = document.getElementById("li-result").innerHTML;
const ENTER_KEY_CODE = 13;

btnEl.addEventListener("click", onCalculation);
inputContainerEl.addEventListener('keypress', (e) => {
  if (e.keyCode === ENTER_KEY_CODE  && !e.altKey) {
    onCalculation(e);
    container;
  }
});

function onCalculation() {
  const firstOperand = +firstOperandEl.value;
  const secondOperand = +secondOperandEl.value;
  let result;

  if (firstOperandEl.value === "" || secondOperandEl.value === "") {
    return;
  }

  switch (selectEl.value) {
    case "Sum":
      result = sum(firstOperand, secondOperand);
      break;
    case "Different":
      result = diff(firstOperand, secondOperand);
      break;
    case "Multiply":
      result = mult(firstOperand, secondOperand);
      break;
    case "Division":
      result = div(firstOperand, secondOperand);
      break;
      case "Sinus":
      result = sin(firstOperand);
      break;
    default:
      result = "";
      break;
  }

  const  resultLiEl= document.createElement("li");
  resultLiEl.innerHTML = liTemplate.replace("{{text}}", result);

  listEl.append(resultLiEl);
}

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function sin(a, b) {
  return Math.sin(a);

}

