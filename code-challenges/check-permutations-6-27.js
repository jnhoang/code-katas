// Check Permutation:
// Given two strings, write a method to decide if one is a permutation of the other.

checkPermutation('thsekdfslsk', 'tlshfssekdk');
checkPermutation('pieceOfMind', 'pieceofmind');
checkPermutation('doug', 'patty');
checkPermutation('fishfood', 'ofdoifhs');


function makeHash(str) {
  let storage = {};
  
  str
  .split('')
  .forEach( (letter) => {
    storage[letter]
    ? storage[letter] += 1
    : storage[letter]  = 1;
  });

  return storage;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let newStr1 = makeHash(str1);
  let newStr2 = makeHash(str2);
  console.log(str1, newStr1)
  console.log(str2, newStr2)
  for (key in str1) {
    if (newStr1[key] !== newStr2[key]) {
      return false;
    }
  }

  return true;
}