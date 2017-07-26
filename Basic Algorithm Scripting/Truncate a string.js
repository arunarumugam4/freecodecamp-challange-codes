
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length>num && num<=3){
    
    str = str.substr(0,num) +"...";
    
  }
  else if (str.length>num){
    str = str.substr(0, num-3) +"...";
  }
  console.log(str.length);
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
