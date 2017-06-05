// Write a method that accepts a list of objects of type Animal, and returns a new list. 
// The new list should be a copy of the original list, 
// * sorted first by the animal's number of legs, 
// * and then by its name.

// If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.

const animal = [
  { name: "Cat",   numOfLegs: 4 }
, { name: "Snake", numOfLegs: 0 } 
, { name: "Dog",   numOfLegs: 4 }
, { name: "Pig",   numOfLegs: 4 }
, { name: "Human", numOfLegs: 2 }
, { name: "Bird",  numOfLegs: 2 }
];

sortAnimal(animal);

function sortAnimal(animalArr) {
  if (animalArr === null) {
    return null;
  }
  if (animalArr.length === 0) {
    return animalArr;
  }
  animalArr = sortByLegs(animalArr);
  animalArr = sortByName(animalArr);
  
  return animalArr;
}

function sortByLegs(animalArr) {
  if (animalArr.length <= 1) {
    return animalArr;
  }
  let pivot = animalArr.shift();
  let left  = animalArr.filter( (animal) => animal.numOfLegs <= pivot.numOfLegs);
  let right = animalArr.filter( (animal) => animal.numOfLegs > pivot.numOfLegs);

  return sortByLegs(left).concat(pivot, sortByLegs(right));
}
function sortByName(animalArr) {
  let animalObj = {};

  // if no key of # of legs, creates a key
  // value will be new arr & will push current animalObj
  // else just push current animalObj to key's arr
  for (let i = 0; i < animalArr.length; i++) {
    animalObj[animalArr[i].numOfLegs] ? 
    animalObj[animalArr[i].numOfLegs].push(animalArr[i]) :
    animalObj[animalArr[i].numOfLegs] = [ animalArr[i] ]
  }
  //console.log(animalObj)
  
  let nameSortedArr = [];
  for (key in animalObj) {
    let temp = animalObj[key].map( (animal) => animal.name ).sort();
    nameSortedArr = nameSortedArr.concat(temp);
  }
  
  let sortedArr = [];
  let ctr = 0;
  
  while (animalArr.length > 0) { 
    for (let i = 0; i < animalArr.length; i++) {
      if (animalArr[i].name === nameSortedArr[ctr]) {
        sortedArr.push(animalArr.splice(i, 1));
        ctr++;
      }
    } 
  }

  return sortedArr;
}