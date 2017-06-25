assertEquals(checkPalindrome('eye'), true);
assertEquals(checkPalindrome('aabaa'), true);
assertEquals(checkPalindrome('a'), true);
assertEquals(checkPalindrome('az'), false);
assertEquals(checkPalindrome('abac'), false);

function checkPalindrome(inputString) {
    var reverse = inputString.split('').reverse().join('');
    return inputString === reverse;
}

function assertEquals(testResult, expectedResult) {
  console.log(testResult === expectedResult);
}