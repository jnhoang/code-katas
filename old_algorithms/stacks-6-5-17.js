class Stack {
  constructor() {
    this.storage  = {};
    this.count    = 0;
  }
  peek() {
    return this.isEmpty() ? console.log('stack is currently empty') : console.log(this.storage[this.count - 1]);
  }
  isEmpty() {
    return this.count === 0;
  }
  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('is  empty');
      return;
    }
    this.count--;
    let val = this.storage[this.count];
    delete this.storage[this.count];

    return val;
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