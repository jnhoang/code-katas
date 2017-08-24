// check if a given array (sorted) has consecutive days

var weekdays = ['sun', 'mon', 'tues', 'weds', 'thurs', 'fri', 'sat'];

var test1 = ['weds', 'thurs', 'fri', 'sat', 'sun'];         // true
var test2 = ['weds', 'fri'];                                // false
var test3 = ['sat', 'sun', 'mon', 'tues'];                  // true
var test4 = ['sun', 'mon', 'tues', 'weds', 'thurs', 'fri']; // true

assertEquals(consecutive(test1), true);
assertEquals(consecutive(test2), false);
assertEquals(consecutive(test3), true);
assertEquals(consecutive(test4), true);

function consecutive(arr) {
  var startDate = arr.shift();
  var startIdx  = weekdays.indexOf(startDate);

  while(arr.length) {
    var nextDate = arr.shift();
    var nextIdx  = weekdays.indexOf(nextDate);
    // console.log('compare: idx = ', idx, ' nextIdx = ', nextIdx)
   
    if (nextIdx !== (startIdx + 1) % 7) {
      return false;
    }
    
    startIdx += 1 % 7;
  }
    return true;
}

function assertEquals(testResult, expectedResult) {
  console.log(testResult === expectedResult ? 'test passed' : 'test failed');
}