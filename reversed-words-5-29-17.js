console.log(assertEquals(reverseWords("hello world!"), "world! hello"));
console.log(assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda"));
console.log(assertEquals(reverseWords("foobar"                       ),  "foobar"));
console.log(assertEquals(reverseWords("kata editor"                  ),  "editor kata"));
console.log(assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row"));

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

function assertEquals(testValue, expectedValue) {
  return testValue === expectedValue;
}