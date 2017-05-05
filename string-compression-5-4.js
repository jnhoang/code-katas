// String Compression
// given string, print each letter and the number of times it occurs
// aabcccccaaa = a2b1c5a3

console.log(assertEquals(stringCompression('aabcccccaaa'),'a2b1c5a3'));
console.log(assertEquals(stringCompression('abce'),'abce'));

function stringCompression(str) {
  // push letter + number to this string to return
  var result = '';
  var check = str[0];
  var count = 1;
  for (var i = 1; i < str.length; i++) {
    if (str[i] !== check) {
      if (str[i] !== check) {
        result += check + count;
        check = str[i];
        count = 1;
      }
    }
    else {
      count++;
    }
  }
  result += check + count;

  return result.length >= str.length ? str : result;
}

function assertEquals(testResult, expectedResult) {
  return testResult === expectedResult ? 'Test passed.' : 'Test failed.';
}