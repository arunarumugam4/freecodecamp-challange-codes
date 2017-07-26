
function fearNotLetter(str) {
  var it = str.split("");
  var v = str[0].charCodeAt();
  var j = v;
  for (var i in it){
    console.log(it[i].charCodeAt());
    if(j!==it[i].charCodeAt()){
      return (String.fromCharCode(j));
    }
    j +=1;
  }
  
  
  return undefined;
}

fearNotLetter("abce");
