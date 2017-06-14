// queue
  // done with classes
  // initiate with 3 values
  // will use prototypes to add new functionality
  // use the fact of the additional value to implement functionality through a quirk

class Queue {
  constructor() {
    this.storage  = {};
    this.start    = null;
    this.counter  = 0;
  }
  isEmpty() {
    return this.counter <= 0;
  }
  push(data) {
    this.storage[this.counter] = data;

    if (this.isEmpty()) {
      this.start = this.counter;
    }

    this.counter += 1;
    console.log(data, 'pushed to storage');
  }
  shift() {
    if (this.isEmpty()) {
      return console.log(empty);
    }

    let val       = this.storage[this.start];
    console.log('val: ', val);
    let oldStart  = this.start;
    
    if (this.storage[this.start + 1]) {
      let next    = this.start += 1;
      this.start  = next;
    }

    delete(this.storage[oldStart]);
    return val;
  }
  peek() {
    if (this.isEmpty()) {
      return console.log('peek:', empty);
    }
    return console.log(this.storage[this.counter - 1]);
  }
}

var empty = 'queue is currently empty';
var queue1 = new Queue();
queue1.shift();  // 'queue is currently empty'
queue1.peek();   // 'queue is currently empty'
queue1.push(1);
queue1.push(3);
var test = queue1.shift();
console.log('test:', test); // 1
console.log('isempty?:', queue1.isEmpty()); // false
queue1.peek(); // 1
console.log(queue1); // {'0': 1}, counter: 1