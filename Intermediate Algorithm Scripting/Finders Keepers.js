
function findElement(arr, func) {
  arr = arr.filter(func);
  var numb = arr[0];
  return numb;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
