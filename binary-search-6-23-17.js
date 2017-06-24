const arr = [1, 3, 5, 7, 8, 12];
console.log(binarySearch(arr, 6)  );
console.log(binarySearch(arr, 8)  );
console.log(binarySearch(arr, 12) );
console.log(binarySearch(arr, 1)  );

function binarySearch(arr, target) {
  let start   = 0;
  let end     = arr.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((end + start) / 2);
    
    if (arr[midpoint] === target) {
      return 'found at index: ' + midpoint;
    }
    else if (arr[midpoint] < target) {
      start = midpoint + 1;
    }
    else {
      end   = midpoint - 1;
    }
  }

  return 'target not in array';
}