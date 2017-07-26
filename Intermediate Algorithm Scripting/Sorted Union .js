
function uniteUnique(arr) {
  var sorttedarray = [];
 console.log(arguments.length);
 
  for ( var i=0; i<arguments.length;i++){
   var sorty = [];
   sorty = arguments[i].filter(function(ele){if(sorttedarray.indexOf(ele)===-1){return ele;}});

    sorttedarray = sorttedarray.concat(sorty);
  }
  
  return sorttedarray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
