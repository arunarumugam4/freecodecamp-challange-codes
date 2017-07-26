
function reverseString(str) {
  var x=[];
  for(var i=0; i<str.length;i++){
    x.push(str[i]);
    }
  x=x.reverse();
  str=x.join("");
  
  return str;
}

reverseString("hello");
