const arr = [5, 2, 1, 7, 12, 4, 8];

console.log(mergeSort(arr));

function merge(arr1, arr2) {
  let sortedArr = [];
  
  while (arr1.length && arr2.length) {
    arr1[0] <= arr2[0] ? 
    sortedArr.push(arr1.shift()) : 
    sortedArr.push(arr2.shift());
  }

  return sortedArr.concat(arr1, arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midpoint  = Math.floor(arr.length / 2);
  let left      = arr.slice(0, midpoint);
  let right     = arr.slice(midpoint, arr.length);
  
  return merge(mergeSort(left), mergeSort(right));
}