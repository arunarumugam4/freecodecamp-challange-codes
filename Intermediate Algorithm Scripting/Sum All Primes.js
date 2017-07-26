
function sumPrimes(num) {
  function primeFinder(n){
         var find;
         var factorCount=0;
         for (var j=1; j<n; j++){
           if(n%j===0){
           	factorCount +=1;
           }
         }
         
       if(factorCount<2){
            find = true;
       }
       else{
       	find= false;
       }
     return find;     
}

  function primearray(num){
var x =[];
for(var i=2; i<=num;i++){
	if(primeFinder(i)){
		x.push(i);
	}

}

return x;
}
  num = primearray(num);
  
  
 num = num.reduce(function(a,b){
    return a+b;
  });
  console.log(num);
  return num;
}

sumPrimes(977);
