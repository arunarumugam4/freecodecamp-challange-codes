
function truthCheck(collection, pre) {
  // Is everyone being true?
  var checker = collection.filter(function(ele){
    return ele[pre];
  });
  if(collection.length===checker.length){
    return true;
  }
  else {
    return false;
  }
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
