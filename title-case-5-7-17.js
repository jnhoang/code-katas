assertEquals(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot');
assertEquals(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
assertEquals(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'), 'Here Is My Handle Here Is My Spout');


function titleCase(str) {
  str = str.toLowerCase();
  var newStr = '';
  newStr += str[0].toUpperCase();

  for (var i = 1; i < str.length; i++) {
    newStr += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
  }
  return newStr; 
}


function assertEquals(testValue, expectedValue) {
  console.log(testValue === expectedValue ? 'test passed' : 'test failed');
}