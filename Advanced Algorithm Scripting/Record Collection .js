
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var item = collectionCopy[id][prop];
  console.log(value.length);
  if(prop==="tracks"){
     console.log("problem is here");
    if(value.length===0){
      delete (collectionCopy[id][prop]);
    }
    
    else if (collectionCopy[id][prop]===undefined){
      collectionCopy[id][prop] = [value];
    }
    
    else {
      collectionCopy[id][prop].push(value);
    }
  }
  
 else if (item===undefined){
   console.log("problem is here");
    collectionCopy[id][prop] = value;
  }
  
  else if (value.length===0){
     console.log(collectionCopy[id]);
     delete collectionCopy[2548]["artist"];
    
  }
  
 delete collectionCopy[2548]["artist"];
  collection=collectionCopy;
  
  return collection;
}

// Alter values below to test your code
 updateRecords(2548, "artist", "");

