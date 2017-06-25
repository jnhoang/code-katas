function radixSort(arr, maxDigits){
  let buckets = makeBuckets();
  let divisor = 1;
  
  for(let i = 0; i < maxDigits; i++){
    arr.forEach( (num) => {
      let numsPlace = Math.floor(num / divisor) % 10;
      buckets[numsPlace].push(num);
    })

    arr      = flattenBucketObj(buckets);
    buckets  = makeBuckets();
    divisor  *= 10;
  }

  return arr;
}


// buckets will be object of key 0-9, vals will be arrs
function makeBuckets(){
  let buckets = {};
  
  for(let i = 0; i < 10; i++){
    buckets[i] = [];
  }
  
  return buckets;
}

function flattenBucketObj(buckets){
  let arr = [];
  
  for(let key in buckets){
    arr = arr.concat(buckets[key]);
  }
  
  return arr;
}

console.log(radixSort([81, 25, 13, 12, 354, 6, 3, 444, 5, 2, 8, 5, 61, 19], 3))