
function mutation(arr) {
  var x=arr[0].toLowerCase();
  var y=arr[1].toLowerCase();
  var y = y.split("");
  var result =0;
  for (i in y){
    if(x.includes(y[i])){
      result += 1;
    }
        
  }
  if (result===y.length){
    return true;
  }
    else {
      return false;
    }
    
    
    }
  
  
mutation(["hello", "hey"]);
