// arr of size n
// arr has number ranging from 1 to n + 1
// 1 number is missing
// find the missing number
// array is sorted
        //[1, 2, 3, 4, 5 ,6]
var arr = [1, 3, 4, 5, 6];
findMissingNumber(arr);

function findMissingNumber(arr) {
  var min     = 0;
  var max     = arr.length - 1;
  var g       = Math.floor(max + min / 2);
  
  while (max - min > 1) {
    if (arr[g] === g + 1) {
      min = g;
    } 
    else {
      max = g;
    }
    g = (max + min) / 2;
  }
  return console.log((arr[min] + arr[max]) / 2);
}