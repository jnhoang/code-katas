// Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const testArr = [
  'a;sdklfj'
, 'asdf;lkja'
, 'fargo'
, 'food'
];

testArr.forEach( test => console.log(test + ' : ' + isUnique(test)) );

// with hash table data structure
function isUnique(str) {
  let storage   = {};
  str           = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (storage[str[i]]) {
      return false;
    }
    storage[str[i]] = 1;
  }

  return true;
}

// testArr.forEach( test => console.log(test + ' : ' + isUnique2(test)) );

function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1, str.length).includes(str[i])) {
      return false;
    }
  }

  return true;
}

// testArr.forEach( test => console.log(test + ' : ' + isUnique3(test)) );

function isUnique3(str) {
  str = str.split('').sort();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }

  return true;
}

