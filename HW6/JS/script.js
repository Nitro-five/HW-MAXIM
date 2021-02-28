let arrLength;
let usersArray = [];

do {
  arrLength = requestNumber("Specify the length of the array (at least 3): ");
} while (arrLength <= 3);

for (let i = 0; i < arrLength; i++) {
  usersArray.push(requestNumber("Write ur number: "));
}

usersArray = sortArray(usersArray);
showArray(usersArray);
maxNumber(usersArray);
minNumber(usersArray);
getString(usersArray);
 
function showArray(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] != 0 && arr[i] % 3 == 0) {
         alert(`${i + 1}. ${arr[i]}`);
         console.log(`${i + 1}. ${arr[i]}`);
  }
  }
}

function sortArray(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

function getString(arr) {
  let divider = prompt('Write ur divider');
  return 'String: ' + arr.join(divider);
}

function maxNumber(arr){
   let max;
   for (let i = 0; i < arr.length - 1; i++) {
      max = Math.max(arr[i], arr[i + 1]);
    }
    alert (`Ur max number ${max}`);
}

function minNumber(arr){
   let min;
   for (let i = 0; i < arr.length - 1; i++) {
      max = Math.min(arr[i], arr[i + 1]);
    }
    alert (`Ur max min ${min}`);
}

function requestNumber(message) {
  let result;
  do {
    result = +prompt(message);
  } while (result != result);
  return result;
}
