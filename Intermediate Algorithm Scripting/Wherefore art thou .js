
function whatIsInAName(collection, source) {
  // What's in a name?
  var arg1 = collection;
  var arg2 = Object.keys(source);
  
  var arr = [];
  // Only change code below this line
  for (var i in arg1){
    var counter = 0;
    console.log(arg1[i]);
    for (var j in arg2){
      if (arg1[i][arg2[j]]===source[arg2[j]]){
        
        counter +=1;
      }
    }
    
    console.log(counter);
    if(counter === arg2.length){
      arr.push(arg1[i]);
      counter=0;
    }
    else{
      counter =0;
      
    }
  }
  
  // Only change code above this line
  
  console.log(arr.length);
  return arr;
}
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
