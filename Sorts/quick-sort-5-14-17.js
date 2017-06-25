const arr = [2, 5, 1, 3, 7, 6, 19, 15];


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let less    = arr.filter( (num) => num < pivot);
  let greater = arr.filter( (num) => num > pivot);
  
  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort(arr));