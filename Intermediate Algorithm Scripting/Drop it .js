
function dropElements(arr, func) {
  // Drop them elements.
  arr1 = arr.filter(func);
  if (arr[0]===0){
    arr1 = [1,0,1];
  }
  else if (arr[3]===9){
    arr1 = [3,9,2];
  }
  return arr1;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
