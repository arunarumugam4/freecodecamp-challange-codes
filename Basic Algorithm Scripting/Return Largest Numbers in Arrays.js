
function largestOfFour(arr) {
  // You can do this!
 
 var maxArray = [];
  for (var i in arr){
    var y = Math.max.apply(null, arr[i]);
    maxArray.push(y);
    
   
  }
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
