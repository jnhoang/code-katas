const arr = [5, 2, 1, 7, 12, 4, 8];

console.log(quickSort(arr));

function quickSort(arr) {
  if (arr <= 1) {
    return arr;
  }

  let pivot     = arr.shift();
  const left    = arr.filter( (num) => num < pivot);
  const right   = arr.filter( (num) => num > pivot);

  return quickSort(left).concat(pivot, quickSort(right));
}