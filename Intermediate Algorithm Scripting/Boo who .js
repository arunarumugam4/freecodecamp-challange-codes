
function booWho(bool) {
  if ( bool !== true && bool !== false){
       bool = new Boolean(bool);
       bool = bool.valueOf();
       if (bool===true){
           return false;
         }
       else {
         return false;
       }
  }
  // What is the new fad diet for ghost developers? The Boolean.
  return true;
}

booWho([1, 2, 3]);
