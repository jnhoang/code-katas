/*Given an array of integers, find the pair of adjacent elements that 
has the largest product and return that product*/

assertEquals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
assertEquals(adjacentElementsProduct([-1, -2]), 2);
assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
assertEquals(adjacentElementsProduct([1, 2, 3, 0]), 6);
assertEquals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
assertEquals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);

function adjacentElementsProduct(arr) {
  let product = arr[0] * arr[1];
  let x = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (product < x * arr[i]) {
      product = x * arr[i];
    }
    x = arr[i];
  }
  return product;
}

function assertEquals(testValue, expectedValue) {
  console.log(testValue === expectedValue);
  return testValue === expectedValue;
}