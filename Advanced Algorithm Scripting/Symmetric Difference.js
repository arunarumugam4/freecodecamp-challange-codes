
function sym(args) {
 var newarray = [];
  var newarray2 =[];
  for (var i in arguments){
    newarray.push(arguments[i]);
    
  }
  
  newarray = newarray.reduce(function(a,b){
       x =[];
       y =[];
    for (var i in a){
      x.push(a[i]);
    }
    for (var j in b){
      y.push(b[j]);
    }
      if(x.length<y.length){
        console.log(x);
        console.log(y);
        for (let elem in x) {
        
          if(y.indexOf(x[elem])!==-1){
            console.log(x[elem]);
            
            b.splice(b.indexOf(x[elem]),1);
            a.splice(a.indexOf(x[elem]),1);
            console.log(a);
            console.log(b);
            console.log(x);
            
            
          }
        }
      }
    else {
       console.log(x);
        console.log(y);
        for (let elem in y) {
        
          if(x.indexOf(y[elem])!==-1){
            console.log(y[elem]);
            
            b.splice(b.indexOf(y[elem]),1);
            a.splice(a.indexOf(y[elem]),1);
            console.log(a);
            console.log(b);
            console.log(y);
            
            
          }
        }
      
    }
    console.log(a);
    console.log(b);
    return a.concat(b);
  });
  console.log(newarray);
  
  for (let i in newarray){
    if(newarray2.indexOf(newarray[i])===-1){
      newarray2.push(newarray[i]);
    }
  }
  

  return newarray2;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
