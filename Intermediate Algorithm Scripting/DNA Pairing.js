
function pairElement(str) {
  str = str.split("");
  var pairs = [];
  
  for (var i in str){
    if (str[i]==="C"){
      pairs.push(["C","G"]);
    }
    else if (str[i]==="G"){
      pairs.push(["G","C"]);
    }
    else if (str[i]==="A"){
      pairs.push(["A","T"]);
    }
    else if (str[i]==="T"){
      pairs.push(["T","A"]);
    }
    
  }
  
  return pairs;
}

pairElement("GCG");
