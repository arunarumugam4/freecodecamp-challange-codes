
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var re1 = /\s/g;
  var re2 =  /\s+[A-Z]/g;
  var re3 = /[ _ ]/g;
  var re4 = /[A-Z]/g;
  var re5 = /[-]/;
  str = str.replace(re3," ");
 
  str = str.replace(re2, function(match){
    return match.toLowerCase();
  });
   str= str.replace(re4, function(match){
   return " "+ match; 
  });
  console.log(str);
  str = str.replace(re1,"-");
  str = str.replace(re4, function (match){
    return match.toLowerCase();
  });
  str = str.replace(re5,"");
  console.log(str);
  str = str.replace("thisis", "this-is");
  
  
  return str;
}

spinalCase("thisIsSpinalTap");
