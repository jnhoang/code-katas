// Pick an element, called a pivot, from the array.
// Partitioning: reorder the array so that all elements 
// with values less than the pivot come before the pivot, 
// while all elements with values greater than the pivot come after it 
// (equal values can go either way). After this partitioning, the pivot 
// is in its final position. This is called the partition operation.
// Recursively apply the above steps to the sub-array of elements with smaller 
// values and separately to the sub-array of elements with greater values.

// sorted = [1, 2, 4, 5, 6, 9, 12, 15]
var arr =   [4, 6, 1, 5, 2, 9, 12, 15]

function quickSort(arr) {
  var sorted = [];

  if (arr <= 1) {
    return arr;
  }
  else {
    var pivot   = arr.shift();
    var left    = [];
    var right   = [];

    arr.forEach(function(num) {
      num > pivot ? right.push(num) : left.push(num);
    });

    return quickSort(left).concat(pivot, (quickSort(right)));
  }
  
}