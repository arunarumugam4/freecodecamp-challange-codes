
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
  if(arr1.length===0){
    arr1 = arr2;
  }
  else {
  arr1.forEach(function(elem1){
    console.log(elem1[1]);
    arr2.forEach(function(elem2){
      console.log(elem2[1]);
      if (elem1[1]===elem2[1]){
          elem2[0] = (elem2[0]+elem1[0]);
         arr1[arr1.indexOf(elem1)]= elem2;
      }
    });
    
    arr2.forEach(function(elem1){
      var checker = true;
      
      arr1.forEach(function(elem2){
        if(elem1[1]===elem2[1]){
          
          checker = false;
        }
      });
      if(checker){
        arr1.push(elem1);
      }
      
    });
    
  });
    
  }
  
  var sorthead =[];
  arr1.forEach(function(elem){
    sorthead.push(elem[1]);
  });
  console.log(sorthead);
  var newarray =[];
  sorthead.sort();
  console.log(sorthead);
  sorthead.forEach(function(elem){
    arr1.forEach(function(elem2){
      if(elem===elem2[1]){
        
        newarray.push(elem2);
      }
    });
  });
  
  console.log(newarray);
  
  
  
    return newarray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
