
function rot13(str) { // LBH QVQ VG!
  var map = {"A":"N" , "B": "O","C":"P","D":"Q","E": "R", "F":"S" , "G":"T", "H":"U" , "I":"V" , "J": "W", "K":"X" , "L":"Y" , "M": "Z", "N":"A" , "O": "B","P":"C","Q":"D","R": "E", "S":"F" , "T":"G", "U":"H" , "V":"I" , "W": "J", "X":"K" , "Y":"L" , "Z": "M"};
  var message="";
  for (var i in str){
    if(str[i]===" "){
      message +=str[i];
    }
    
    else if(str[i] in map){
      
     
      message += map[str[i]];
      
    }
    else {
      message += str[i];
    }
  }
  return message;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
