
function titleCase(str) {
str = str.toLowerCase();
 var x = str.split(' ');
 console.log(typeof(x));
  var y = [];
  for(var i in x){
    var z = x[i].split('');
    z[0] = z[0].toUpperCase();
    z = z.join('');
    y.push(z);
  }
  
y= y.join(' ');
str = y;
 
  return str;
}

titleCase("I'm a little tea pot");
