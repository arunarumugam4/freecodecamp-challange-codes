
function sumFibs(num) {
  function fibioncciSum(x){
	var array= [1,1,2];
	var newArray =[];
	var sumOfArray=0;

	var condition=0;
    while(condition<=x){
    	array.push(array[array.length-1]+array[array.length-2]);
        condition = array[array.length-1]+array[array.length-2];
    }
    console.log(array);
     
    for (var i in array){
    	if(array[i]%2!==0){
    		newArray.push(array[i]);
   
    	}
    }
    console.log(newArray);
    for (var i in newArray){
    	sumOfArray += newArray[i];
    }



    return sumOfArray;
	}
 
  
  return fibioncciSum(num);
}

sumFibs(75025);
