
class Stack {
  constructor() {
    this.storage  = {};
    this.count    = 0;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return console.log('peek: is empty');
    }

    return this.storage[this.count - 1];
  }
  enqueue(val) {
    this.storage[this.count]    = val;
    this.count                  += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('dequeue: is empty!');
    }

    this.count    -= 1;
    let temp      = this.storage[this.count];
    delete          this.storage[this.count];

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