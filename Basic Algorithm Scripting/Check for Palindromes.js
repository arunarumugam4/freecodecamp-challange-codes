
function palindrome(str) {
  // Good luck!
 str = str.replace(/[\W_]+/g,"");
  str=str.toLowerCase();
  
  var x=[];
  for(var i=0;i<str.length;i++){
    x.push(str[i]); 
  }
  x.reverse();
  x=x.join("");
  
  if(x===str){
  return true;}
  else{return false;}
}



palindrome("race car");
