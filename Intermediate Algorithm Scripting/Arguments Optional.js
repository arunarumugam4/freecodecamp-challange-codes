
function addTogether(x,y) {
  if(typeof(x)==="string"){
    return undefined;
  }
 else if(arguments.length===2){
    if(typeof (x) ==="string"||typeof(y)==="string"){
      return undefined;
    }
    else{
    return x+y;
    }
  }
  
  else {
    return function sumnum(z){
      if (Array.isArray(z)){
        return undefined;
      }
      
      else {
      return x+z;
      }
    };
  }
  
  

 
 
}

addTogether("http://bit.ly/IqT6zt");

