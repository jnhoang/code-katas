// You are given a two-digit integer n. Return the sum of its digits.
// For n = 29, the output should be
// addTwoDigits(n) = 11.

console.log(assertEquals(addTwoDigits(11), 2));
console.log(assertEquals(addTwoDigits(48), 12));
console.log(assertEquals(addTwoDigits(10), 1));
console.log(assertEquals(addTwoDigits(25), 7));

function addTwoDigits(n) {
  return  n
          .toString()
          .split('')
          .reduce( (total, num) => Number.parseInt(total) + Number.parseInt(num) );
}

function assertEquals(testValue, expectedValue) {
  return testValue === expectedValue ? 'Test Passsed' : 'Test Failed'
}