// One Away:
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function
// to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  var longer = str1.length > str2.length ? str1 : str2;
  var shorter = str1.length > str2.length ? str2 : str1;
  // increment through the shorter str
  var shortIndex = 0;
  // number of "edits" needed
  var ctr = 0;

  for (var i = 0; i < longer.length; i++) {
    // unequal lengths -- ex: "pale" vs. "ple"
    if (str1.length !== str2.length) { 
      longer[i] === shorter[shortIndex] ? shortIndex++ : ctr++;
    } 
    else {
      // equal lengths -- ex: "pale" vs. "bale" or "pale" vs. "bake"
      if (longer[i] !== shorter[i]) { ctr++; }
    }
  }
  return ctr > 1 ? false : true;
}

console.log("oneAway Test 1: ", assertEquals(oneAway("pale", "ple"), true));
console.log("oneAway Test 2: ", assertEquals(oneAway("pales", "pale"), true));
console.log("oneAway Test 3: ", assertEquals(oneAway("pale", "bale"), true));
console.log("oneAway Test 4: ", assertEquals(oneAway("pale", "bake"), false));



function assertEquals(testResult, expectedResult) {
  if (testResult === expectedResult) {
    return "Test passed.";
  } else {
    return "Test failed.";
  }
}