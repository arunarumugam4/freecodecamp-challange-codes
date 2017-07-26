
function sumAll(arr) {
  var y = 0;
   function range(start, end, increment) {
    var array = [];
    var current = start;

    increment = increment || 1;
    if (increment > 0) {
        while (current <= end) {
            array.push(current);
            current += increment;
        }
    } else {
        while (current >= end) {
            array.push(current);
            current += increment;
        }
    }
    return array;
}
  arr =arr.sort(function(a,b){return a-b;});
  console.log(arr);
 var x= range(arr[0],arr[1]);
  console.log(x);
  for (var i in x){
    y += x[i];
  }
  
  
  return y;
}

sumAll([10, 5]);
