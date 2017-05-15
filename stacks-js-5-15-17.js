var Stack = function () {
  this.counter = 0;
  this.storage = {};
}

Stack.prototype.push = function(num) {
  this.storage[this.counter] = num;
  this.counter++;
}
Stack.prototype.pop = function() {
  let value;

  if (this.isEmpty()) {
    return 'Stack is currently empty';
  }

  this.counter--;
  value = this.storage[this.counter];
  delete this.storage[this.counter];
  return value;
}
Stack.prototype.peek = function() {
  return this.storage[this.counter - 1];
}
Stack.prototype.isEmpty = function () {
  return this.counter === 0;
}

var stack1 = new Stack;
stack1.peek();
stack1.push(1);
stack1.push(3);
var test = stack1.pop();
console.log('test:', test);
console.log('isempty?:', stack1.isEmpty()); // false
stack1.peek();
console.log(stack1);