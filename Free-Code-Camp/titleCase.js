var assert = require('assert');

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

const testCases = [
  ["I'm a little tea pot",  "I'm A Little Tea Pot"],
  ["sHoRt AnD sToUt", "Short And Stout"],
  ["HERE IS MY HANDLE HERE IS MY SPOUT", "Here Is My Handle Here Is My Spout"]
]

function titleCase(str) {
  const words   = str.split(' ');
  const capCase = words.map( (word) => word[0].toUpperCase() + word.substring(1).toLowerCase());

  return capCase.join(' ');
}

testCases.forEach((test) => {
  const start    =  Date.now();
  const testCase =  titleCase(test[0]);
  const msTime   =  Date.now() - start;
  console.log(`test ran in ${msTime}ms`)

  const assertCase =  test[1];
  assert.equal(testCase, assertCase)
})


