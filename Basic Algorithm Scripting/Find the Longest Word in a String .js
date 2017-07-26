
function findLongestWord(str) {
  var x = str.split(" ");
  var y=typeof(x);
  console.log(y);
  console.log(x);
  x= x.map(function(i){
   return i.length;
  });
  var z = Math.max.apply(null, x);
  return z;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
