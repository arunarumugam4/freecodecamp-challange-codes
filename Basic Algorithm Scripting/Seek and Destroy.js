
function destroyer(arr) {
  // Remove all the values
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arr);
  var newarr = [];
  for (i in arr){
    if(arr[i]===arguments[1] || arr[i]===arguments[2] || arr[i]===arguments[3]){
      
    }
    else {
      newarr.push(arr[i]);
    }
  }
  
  return newarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
