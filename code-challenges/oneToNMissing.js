// given an array of unique numbers of size n from 1 to n + 1
// 1 number missing
// list is unsorted
// n = 6
const n   = [1, 2, 4, 5, 6];

//  O(n)
//console.log(findMissing(n));
function findMissing(arr) {
  let ctr = 1;
  
  for (let i = 0; i < n.length; i++) {
    if (ctr !== arr[i]) {
      return ctr;
    }
    ctr++;
  }
}

// O (log(n))
// console.log(findMissing2(n))

function findMissing2(arr) {
  let start   = 0;
  let end     = arr.length - 1;

  while (end - start > 1) {
    let midpoint = Math.floor( (start + end) / 2 );
    
    arr[midpoint] - midpoint > 1
    ? end    = midpoint
    : start  = midpoint;
  }

  let missingVal = Math.floor( (arr[start] + arr[end]) / 2);
  
  return missingVal; 
}




const m   = [2, 6, 4, 1, 5];

console.log(findMissingUnsorted(m));

function findMissingUnsorted(unsortedArr) {
  let storage   = {};
  let ctr       = 1;
  unsortedArr.forEach( (num) => storage[num] = num );
  
  for (key in storage) {
    if (ctr !== storage[key]) {
      break;
    }
    ctr++;
  }

  return ctr;
}
