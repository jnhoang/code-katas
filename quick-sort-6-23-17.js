const arr = [1, 5, 4, 7, 3, 9, 12, 2, 6, 16];

console.log(quickSort(arr));


function quickSort(arr) {
  if (arr <= 1) {
    return arr;
  }
  let pivot   = arr.shift();
  let left    = arr.filter( (num) => num <  pivot );
  let right   = arr.filter( (num) => num >= pivot );

  return quickSort(left).concat(pivot, quickSort(right));
}