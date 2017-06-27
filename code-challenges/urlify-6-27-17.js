// URLify:
// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

const testArr = [
  ' asdf   fdsla df '
, 'tkjes klskmc'
, 'there once was a man'
, 'who was a clown'
];

testArr.forEach( str => console.log(str + ': ' + URLify(str) ));

function URLify(str) {
    return str
      .split('')
      .map( (letter) => letter = letter === ' ' ? '%20' : letter )
      .join('');
}