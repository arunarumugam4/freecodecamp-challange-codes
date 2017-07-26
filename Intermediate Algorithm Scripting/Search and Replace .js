
function myReplace(str, before, after) {
  
  var re = new RegExp(before, "g");
  if(before[0] == before[0].toUpperCase()){
  after = after.split("");
  after[0]=after[0].toUpperCase();
  after = after.join("");}
  
 var newstr = str.replace(re, after);
  
  return newstr;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
