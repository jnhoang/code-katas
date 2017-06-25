const arr = [1, 3, 5, 7, 8, 12];
const target = 8;

function binarySearch(arr, target) {
  let min = 0;
  let max =  arr.length;
  
  while (min < max) {
    let midpoint = Math.floor( ((max + min) / 2) );

    if (arr[midpoint] === target) {
      return arr[midpoint];
    }
    else if (arr[midpoint] > target) {
      max = midpoint + 1;
    }
    else if (arr[midpoint] < target) {
      min = midpoint - 1;
    }
  }
  return -1
}


binarySearch(arr, target);
