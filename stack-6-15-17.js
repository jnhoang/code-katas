// stacks
  // done with classes
  // initiate with 2 values
  // will use methods to add new functionality
    // what are 4 stack methods: peek, isempty
  // use 1 value to help track the other

class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  isEmpty() {
    return this.counter <= 0;
  }
  push(data) {
    this.storage[this.counter] = data;
    console.log('pushed: ', this.storage[this.counter]);
    this.counter += 1;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('pop: stack is empty');
      return;
    }

    let val = this.storage[this.counter - 1];
    delete    this.storage[this.counter - 1];
    this.counter -= 1;
    return val;
  }
  peek() {
    if (this.isEmpty()) {
      console.log('peek: stack is empty');
    }
    console.log('peek: ', this.storage[this.counter - 1]);
  }
}







  // TEST VALUES
    var stack1 = new Stack();
    stack1.pop(); // 'stack is currently empty'
    stack1.peek(); // 'stack is currently empty'
    stack1.push(1);
    stack1.push(3);
    var test = stack1.pop();
    console.log('test:', test); // 3
    console.log('isempty?:', stack1.isEmpty()); // false
    stack1.peek(); // 1
    console.log(stack1); // {'0': 1}, counter: 1