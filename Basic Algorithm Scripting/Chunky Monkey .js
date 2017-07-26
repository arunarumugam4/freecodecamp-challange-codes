
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newarr = [];
  
  while(arr.length>0){
    var curarr = arr.splice(0,size);
    newarr.push(curarr);
    
  }
  
  return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
