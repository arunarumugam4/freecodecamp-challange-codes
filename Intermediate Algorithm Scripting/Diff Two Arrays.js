
function diffArray(arr1, arr2) {
  var newArr = [];
  var c;
  var d;
  function initial(){
  if (arr1.length>=arr2.length){
     c=arr1;
     d=arr2;
  }
  else{
     c= arr2;
     d= arr1;
  }
  
  for (var i in c){
    if(d.includes(c[i])){
      
    }
    else {
      newArr.push(c[i]);
    }
    
  }
  }
  function reverseCheck(){
    
     if (arr1.length>=arr2.length){
     c=arr2;
     d=arr1;
  }
  else{
     c= arr1;
     d= arr2;
  }
  
  for (var i in c){
    if(d.includes(c[i])){
      
    }
    else {
      newArr.push(c[i]);
    }
    
  }
    
  }
  
  initial();
  reverseCheck();
  // Same, same; but different.
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
