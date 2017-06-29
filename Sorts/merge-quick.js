const testArr = [
  [5, 2, 7, 3, 12, 342, 23, 41, 61]
, []
, [4, 2, 6, 3, 0, 123, 4, 2, 5]
, [5, 4]
, [13, 51, 5, 21, 8, 12]
]

testArr.forEach( test => console.log('mergesort: ' + mergeSort(test)) );
// testArr.forEach( test => console.log('quicksort: ' + quickSort(test)) );
// testArr.forEach( test => console.log('mergesort: ' + mergeSort(test)) );

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midpoint  = Math.floor((arr.length / 2));
  let left      = arr.slice(0, midpoint);
  let right     = arr.slice(midpoint, arr.lenght);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0]
    ? sortedArr.push(arr1.shift())
    : sortedArr.push(arr2.shift());
  }

  return sortedArr.concat(arr1, arr2);
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot   = arr.shift();
  let left    = arr.filter( (num)  => num < pivot );
  let right   = arr.filter( (num) => num > pivot );

  return quickSort(left).concat(pivot, quickSort(right));
}