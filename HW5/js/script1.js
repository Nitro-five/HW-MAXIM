var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // устанавливает длину массива 5.
printEntries(arr);

function printEntries(arr) {
  var goNext = true;
  var entries = arr.entries();
  while (goNext) {
    var result = entries.next();
    if (result.done !== true) {
      console.log(result.value[1]);
      goNext = true;
    } else
      goNext = false;
  }
  console.log('=== printed ===');
}