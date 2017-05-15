const Queue = function() {
  this.counter = 0;
  this.start = 0;
  this.storage = {};
}

Queue.prototype.push = function(num) {
  this.storage[this.counter] = num;
  this.counter++;
  console.log('just pushed: ', num, this.storage)
}
Queue.prototype.shift = function() {
  let value = this.storage[this.start];
  delete this.storage[this.start];
  this.counter--;
  this.start++;
  console.log('returned: ', value, 'storage: ', this.storage);
  return value;
}
Queue.prototype.peek = function() {
  console.log(this.storage[this.start]);
  return this.storage[this.start];
}
Queue.prototype.isEmpty = function() {
  return this.counter === 0;
}

var queue1 = new Queue();
queue1.peek();
queue1.push(1);
queue1.push(3);
var test = queue1.shift();
console.log('test:', test);
console.log('isempty?:', queue1.isEmpty()); // false
queue1.peek();
console.log(queue1);