  // write function that splits an arr (1st arg)
  // into groups of size (2nd arg)
  // return a 2-dimentional array
assertArrEquals(chunkArrayInGroups(["a", "b", "c", "d"], 2)         , [["a", "b"], ["c", "d"]]              );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)           , [[0, 1, 2], [3, 4, 5]]                );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)           , [[0, 1], [2, 3], [4, 5]]              );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)           , [[0, 1, 2, 3], [4, 5]]                );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)        , [[0, 1, 2], [3, 4, 5], [6]]           );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)  , [[0, 1, 2, 3], [4, 5, 6, 7], [8]]     );
assertArrEquals(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)  , [[0, 1], [2, 3], [4, 5], [6, 7], [8]] );


function chunkArrayInGroups(arr, size) {
  var returnArr = [];
  
  while (arr.length) {
    returnArr.push(arr.splice(0, size)); 
  }
  return returnArr;
} 

function assertArrEquals(testValue, expectedValue) {
  return console.log(JSON.stringify(testValue) === JSON.stringify(expectedValue));
}