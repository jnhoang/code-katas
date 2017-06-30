// given two strings (str1, str2)
// return true if str1 an anagram of str2
// else return false
// case insensitive, and don't count symbols or spaces


console.log(anagramDetect('rsooc.4$%@'	, 'orcaos' ) + ' false');
console.log(anagramDetect('$@oijdq'			, 'jdioq'	 ) + ' true');
console.log(anagramDetect('rayray'			, 'yaryar' ) + ' true');
console.log(anagramDetect(''						, ''			 ) + ' false');
console.log(anagramDetect('theater'			, 'theatre') + ' true');
console.log(anagramDetect('!@#$%^&*()e'	, '12e1'	 ) + ' true');

function anagramDetect(str1, str2) {
	if (str1.length === 0) {
		return false;
	}
	// remove all extra junk
	str1 = 	str1
					.toLowerCase()
					.replace(/[^a-z]/g, '')
					.split('');

	str2 =	str2
					.toLowerCase()
					.replace(/[^a-z]/g, '')
					.split('');
	
	// same lengths?
	if (str1.length !== str2.length) {
		return false;
	}
	// check that each letter of str1 in str2
	while (str1.length) {
		let current = str1.shift();

		if(!str2.includes(current)) {
			return false;
		}

		str2.splice(str2.indexOf(current), 1);
	}
	return true;
}