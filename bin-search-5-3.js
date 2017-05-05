var array = [1, 5, 32, 77, 105, 117, 119, 1122]; // 8
var target = 117;


binarySearch(array, target);

  // find start point
  // find end point
  // find mid-point

  //loop through
  // mid point == target? 
    // higher: start point == midpoint + 1, repeat
    // lowert: start point == midpoint - 1, repeat
function binarySearch(arr, target) {
  var newArr;
  var start = 0;
  var end = arr.length - 1;
  var midpoint;

  while (start <= end) {
    midpoint = Math.floor((end + start) / 2);
    if (arr[midpoint] === target) {
      return midpoint;
    } 
    else if (arr[midpoint] < target) {
      start = midpoint + 1;
    }            
    else if (arr[midpoint] > target) {
      end = midpoint - 1;
    }
  }
  return -1;
}