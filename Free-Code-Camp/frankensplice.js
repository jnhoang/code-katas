var assert = require('assert');

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

const testCases = [
  [[1, 2, 3], [4, 5], 1, [4, 1, 2, 3, 5]],
  [[1, 2] , ["a", "b"], 1, ["a", 1, 2, "b"]],
  [["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2, ["head", "shoulders", "claw", "tentacle", "knees", "toes"]]
]
const frankenSplice = (arr1, arr2, n) => {
  arr2.splice(n, 0, ...arr1);
  return arr2;
};

testCases.forEach((test) => {
  const start    =  Date.now();
  const testCase =  frankenSplice(test[0], test[1], test[2]);
  const msTime   =  Date.now() - start;
  console.log(`test ran in ${msTime}ms`)
  const assertCase =  test[3];
  assert.deepEqual(testCase, assertCase)
})


