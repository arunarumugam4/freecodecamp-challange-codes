
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var a;
  var strlis = str.split(" ");
  console.log(str);
  if (strlis.length ===1){
    strlis = strlis.join(" ");
    if(strlis[strlis.length-1]===target){
      return a= true;
    }
    else{
      return a= false;
    }
    
  }
  else if(strlis[strlis.length-1].includes(target)){
    return a= true;
  }
  else {
    return a= false;
  }
  
  return a;
}

confirmEnding("Bastian", "n");
