// Palindrome Permutation:
// Given a string, write a function to check if it is a permutation of a palindrome.
// The palindrome does not need to be limited to just dictionary words.

assertEquals(palindromePermutation("Tact coa")    , true);
assertEquals(palindromePermutation("Tact   coa")  , true);
assertEquals(palindromePermutation("Tactt coa")   , false);
assertEquals(palindromePermutation("Tactt dddcoa"), false);
assertEquals(palindromePermutation('eye')         , true);
assertEquals(palindromePermutation('aabaa')       , true);
assertEquals(palindromePermutation('a')           , true);
assertEquals(palindromePermutation('az')          , false);
assertEquals(palindromePermutation('abac')        , false);

function palindromePermutation(str) {
  let storage = {};
  let oddsCtr = 0;

  str
  .split('')
  .filter(  (letter) => letter !== ' ')
  .forEach( (letter) => {
    letter = letter.toLowerCase();
    
    storage[letter] 
    ? storage[letter] += 1
    : storage[letter]  = 1
  });
  
  for (let letter in storage) {
    storage[letter] % 2 == 0 ? null : oddsCtr++;
  }
  return oddsCtr === 1;
}


function assertEquals(test, expected) {
  return console.log(test === expected);
}