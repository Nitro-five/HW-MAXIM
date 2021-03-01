"use strict"; 

getResult(getArray());

function getArray() {
  let array = prompt("Write ur numbers separated by commas");
  return array.split(",");
}

function getResult(arr) {
  let array = arr;
  doOperations(array);
  nextOperation(array);
}

function doOperations(arr) {
  let result;
  let operation;
  do {
    operation = prompt(
      "Choose the operation:\n sorting, multiples of three, string, max, min"
    );
    switch (operation) {
      case "sorting":
        result = sorting(arr);
        break;
      case "multiples of three":
        result = getMultiplesOfThree(arr);
        break;
      case "string":
        result = getString(arr);
        break;
      case "max":
        result = getMax(arr);
        break;
      case "min":
        result = getMin(arr);
        break;
      default:
        alert("Choose the correct operation!");
        operation = 0;
    }
  } while (!operation);
  alert(result);
}

function nextOperation(previous) {
  if (confirm("U want to continue?")) {
    if (confirm("Start with new array?")) {
      getResult(getArray());
    } else {
      getResult(previous);
    }
  }
}

function sorting(arr) {
  let arrangement = arr.concat().sorting((a, b) => a - b);
  return "Sorted array:\n " + arrangement;
}
function getMultiplesOfThree(arr) {
  return "Multiplies of three:\n " + arr.filter((e) => e % 3 == 0);
}
function getString(arr) {
  let divider = prompt("Enter the divider");
  return "String:\n " + arr.join(divider);
}
function getMax(arr) {
  let max;
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(arr[i], arr[i + 1]);
  }
  return "Max:\n " + max;
}
function getMin(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(arr[i], arr[i + 1]);
  }
  return "Min:\n " + min;
}
