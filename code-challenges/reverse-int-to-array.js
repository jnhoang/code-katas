// given random num
// return an array of single digits in reverse order of num

const testArr = [
  13253
, 75328532
, 837467489
, 02939826754
, 493838207845
]
const expectedArr = [
  [ 3, 5, 2, 3, 1 ]
, [ 2, 3, 5, 8, 2, 3, 5, 7 ]
, [ 9, 8, 4, 7, 6, 4, 7, 3, 8 ]
, [ 4, 5, 7, 6, 2, 8, 9, 3, 9, 2 ]
, [ 5, 4, 8, 7, 0, 2, 8, 3, 8, 3, 9, 4 ]
]

for (let i = 0; i < testArr.length; i++) {
  let testResult = digitize(testArr[i]);
  for (let j = 0; j < testResult.length; j++) {
    if (testResult[j] !== expectedArr[i][j]) {
      console.log(testResult + ' test failed');
      break;
    }
  }
  console.log(testResult + ' test passed');
}

function digitize(n) {
  return  n
          .toString()
          .split('')
          .reverse()
          .map( (num) => Number.parseInt(num));
}