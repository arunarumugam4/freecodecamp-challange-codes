
function translatePigLatin(str) {
  str = str.split("");
  var result;
  var adder;
  var counter =0;
  for (var i in str){
    
    if( i === "0" && (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u") ){
      console.log(str[i]);
      console.log(i);
      break;
    }
    
    else if( i !== "0" && (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u") ){
          
     counter +=1;
      console.log(i);
      adder = str.splice(0,i);
      break;
    }
    
  }
  console.log(counter);
  
  if(counter===0){
    str = str.join("");
    result = str + "way";
    return result;
    
    
  }
 else{ 
  
  adder = adder.join("");
  console.log(adder);
  str = str.join("");
  console.log(str);
  var c = "ay";
    
  result =   str + adder + c;
  return result;
 }
}

translatePigLatin("glove");
