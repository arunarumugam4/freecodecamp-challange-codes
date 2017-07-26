
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
 Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
  
  
  arr.sort(function(a, b){
    return a-b;
  });
  for (i in arr){
    if(arr[i]>num){
      arr.insert(i,num);
    }
    else{
      arr.push(num);
    }
  }
  console.log(arr);
  var s = arr.indexOf(num);
  return s;
}

getIndexToIns([40, 60], 50);
