
function convertHTML(str) {
  
   var re1 = /&/g;
  var re2 = /</g;
  var re3 = />/g;
  var re4 =/"/g;
  var re5 = /'/g;
  str = str.replace(re1,"&amp;");
  str = str. replace(re2, "&lt;");
  str = str.replace(re3, "&gt;");
  str = str.replace(re5, "&apos;");
  str = str.replace (re4, "&quot;");
  
  return str;
}

convertHTML("Dolce & Gabbana");

