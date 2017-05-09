assertEquals(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [5, 27, 39, 1001]);

function largestOfFour(arr) {
  var largestArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    var largest = arr[i][0];
    
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    largestArr.push(largest);
  }     
  return largestArr;
}


function assertEquals(testResult, expectedResult) {
  console.log('testResult: ', testResult);
  console.log('expectedResult: ', expectedResult);
  //console.log(testResult === expectedResult ? 'test passed' : 'test failed');
}