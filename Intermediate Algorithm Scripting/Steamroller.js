
function steamrollArray(arr) {
  x = arr;
  for (i in x){
    if (x[i].length !==2){
        while(Array.isArray(x[i])){
            x[i]=x[i][0];
        }
      if(x[i]===undefined){
        
      }
    }
    else {
        for (j in x[i]){
            while(Array.isArray(x[i][j])){
                x[i][j]=x[i][j][0];
            }
        }
    }
}
  
  var y =(x.splice(2))[0];
  for (k in y){
    x.push(y[k]);
  }
 x = x.filter(function(elem){
    if(!(elem===undefined)){
     return elem;
    }
       }
   );
  return x;
}

steamrollArray([1, [], [3, [[4]]]]);
