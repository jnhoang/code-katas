

class Stack {

  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  isEmpty() {
    return this.counter === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return console.log('peek: is empty');
    }
    console.log(this.storage[this.counter - 1]);
  }
  enqueue(val) {
    this.storage[this.counter]    = val;
    this.counter                  += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('dequeue: is empty');
    }
    this.counter    -= 1;
    let temp        = this.storage[this.counter];
    delete            this.storage[this.counter];

    return temp;
  }
}

// TEST VALUES
var stack1 = new Stack();
stack1.dequeue(); // 'stack is currently empty'
console.log(stack1);
stack1.peek(); // 'stack is currently empty'
stack1.enqueue(1);
stack1.enqueue(3);
var test = stack1.dequeue();
console.log('test:', test); // 3
console.log('isempty?:', stack1.isEmpty()); // false
stack1.peek(); // 1
console.log(stack1); // {'0': 1}, counter: 1