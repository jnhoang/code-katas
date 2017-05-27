class Stack {
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push(num) {
    this.storage[this.counter] = num;
    this.counter += 1;
  }
  pop() {
    if (this.counter === 0) {
      console.log('pop, stack is currently empty');
      return 'stack is currently empty';
    }

    let value;
    this.counter -= 1;
    value = this.storage[this.counter];
    delete this.storage[this.counter];

    return value;
  }
  peek() {
    console.log(this.storage[this.counter - 1] || 'peek, stack is currently empty');
    return this.storage[this.counter - 1] || 'stack is currently empty';
  }
  isEmpty() {
    return this.counter === 0;
  }
}

var stack1 = new Stack();
stack1.pop(); // 'stack is currently empty'
stack1.peek(); // 'stack is currently empty'
stack1.push(1);
stack1.push(3);
var test = stack1.pop();
console.log('test:', test); // 3
console.log('isempty?:', stack1.isEmpty()); // false
stack1.peek(); // 1
console.log(stack1); // {'0': 1}