// given a queue of customers
// n number of cashiers
// return the time it takes to clear the queue

var queue      = [1, 5, 2, 1, 1, 5, 6, 3, 2, 7, 9, 4];
var registers  = 3;

console.log(findTime(queue, registers));

function findTime(queue, n) {
	storage = {};

	for (let i = 0; i < n; i++) {
		storage[i] = 0;
	}
	
	while (queue.length) {
    let next      = queue.shift();
    let shortest  = "0";
		
		for (let arr in storage) {
			if (storage[shortest] > storage[arr]) {
				shortest = arr;
			}
		}
		storage[shortest] += next;
	}

	let longest = "0";

	for (let arr in storage) {
		if (storage[longest] < storage[arr]) {
			longest = arr;
		}
	}
	return longest;
}
