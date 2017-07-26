
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newarr = [];
  var newarr2 = [];
  
  for (i in arr){
    
    if (arr[i]===false || arr[i]===null || arr[i]===0 || arr[i]==="" || arr[i]===undefined || arr[i]===false ){
     console.log( arr[i] +" "+ "I'm going to die");
    }
    else{
      newarr.push(arr[i]);
    }
  }
  
  for (i in newarr){
    if (newarr[i].toString()==="NaN"){
      console.log(arr[i]+" "+ "I'm going to die");
    }
    else{
      newarr2.push(newarr[i]);
    }
    
  }
  
  
  
  return newarr2;
}

bouncer([7, "ate", "", false, 9]);
