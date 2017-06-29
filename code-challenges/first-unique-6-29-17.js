// given a string, return the first instance of a unique character

const testObj = {
  'forest'          : 'f'
, 'theater'         : 'h'
, 'aabbccd'         : 'd'
, 'thr ead  ed jo'  : 't'
}; 

for(let test in testObj) {
	assertEquals( testObj[test], firstUnique(test) );
}

function firstUnique(str) {
	let storage = {};

	str = str
				.replace(/\s/g, '')
				.toLowerCase();

	for (let i = 0; i < str.length; i++) {
		storage[str[i]]
		? storage[str[i]] += 1
		: storage[str[i]]	= 1;
	}

	for(let letter in storage) {
		if (storage[letter] === 1) {
			return letter;
		}
	}

	return '';
}

function assertEquals(test, expected) {
	return console.log('test passed: ' + (test === expected));
}