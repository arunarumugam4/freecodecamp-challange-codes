//
function smallestCommons(arr) {
 var counter =0;
  var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

};
  arr = range(arr[0],arr[1]);
 
 var container =arr[arr.length-1];
  
  var containermultiple = 2;
while(counter<arr.length){
  for(var i in arr){
    if(container%arr[i]===0){
      console.log(container);
      counter +=1;
    }else{
      counter=0;
      container = arr[arr.length-1]*containermultiple;
      containermultiple +=1;
     
      break;
    }
  }
}
 return container; 

}


smallestCommons([1,2,3,4,5]);
