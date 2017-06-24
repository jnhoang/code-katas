class Queue {
  constructor() {
    this.storage  = {};
    this.start    = 0;
    this.counter  = 0;
  }
  isEmpty() {
    return this.start === this.counter;
  }
  enqueue(val) {
    this.storage[this.counter]    = val;
    this.counter                  += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('dequeue: is empty');
    }

    let temp      = this.storage[this.start];
    delete          this.storage[this.start];
    this.start    += 1;
    return temp;
  }
}

var empty = 'queue is currently empty';
var queue1 = new Queue();
queue1.dequeue();  // 'queue is currently empty'
queue1.enqueue(1);
queue1.enqueue(3);
var test = queue1.dequeue();
console.log('test:', test); // 1
console.log('isempty?:', queue1.isEmpty()); // false
console.log(queue1); // {'1': 3}, counter: 2
console.log(queue1.dequeue()); // 3
console.log('queue empty?:', queue1.isEmpty()); // true
console.log(queue1); // { empty }, start: 2, counter 2