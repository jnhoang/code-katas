const arr = [5, 2, 1, 7, 12, 4, 8];
  
mergeSort(arr);
  
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midpoint = arr.length / 2;
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint, arr.length);
  
  return merge(mergeSort(left), mergeSort(right));
}
  
function merge(arr1, arr2) {
  let sortedArr = [];
  
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      sortedArr.push(arr2.shift());
    }
    else if (arr2.length === 0) {
      sortedArr.push(arr1.shift());
    }
    else if (arr1[0]< arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return sortedArr;
}