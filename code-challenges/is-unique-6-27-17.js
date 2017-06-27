// Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const testArr = [
  'a;sdklfj'
, 'asdf;lkja'
, 'fargo'
, 'food'
];

// testArr.forEach( test => console.log(test + ' : ' + isUnique(test)) );

// with hash table data structure
function isUnique(str) {
  let storage = {};

  str
  .split('')
  .forEach( (ltr) => {
    storage[ltr]
    ? storage[ltr] += 1
    : storage[ltr]  = 1;
  });

  for (letter in storage) {
    if (storage[letter] > 1) {
      return false;
    }
  }

  return true;
}

testArr.forEach( test => console.log(test + ' : ' + isUnique2(test)) );

function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1, str.length).includes(str[i])) {
      return false;
    }
  }

  return true;
}