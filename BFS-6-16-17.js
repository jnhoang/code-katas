// queue
  // done with classes
  // initiate with 3 values
  // will use prototypes to add new functionality
  // use the fact of the additional value to implement functionality through a quirk

class Queue {
  constructor() {
    this.storage  = {};
    this.start    = 0;
    this.counter  = 0;
  }
  isEmpty() {
    return this.counter === this.start;
  }
  enqueue(data) {
    this.storage[this.counter] = data;

    this.counter += 1;
    console.log(data, 'pushed to storage');
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log(empty);
    }

    let val       = this.storage[this.start];
    console.log('val: ', val);
    let oldStart  = this.start;
    
    this.start  = this.start + 1;

    delete(this.storage[oldStart]);
    return val;
  }
  peek() {
    if (this.isEmpty()) {
      return console.log('peek:', empty);
    }
    return console.log('peek: ', this.storage[this.counter - 1]);
  }
}

// var empty = 'queue is currently empty';
// var queue1 = new Queue();
// queue1.dequeue();  // 'queue is currently empty'
// queue1.peek();   // 'queue is currently empty'
// queue1.enqueue(1);
// queue1.enqueue(3);
// var test = queue1.dequeue();
// console.log('test:', test); // 1
// console.log('isempty?:', queue1.isEmpty()); // false
// queue1.peek(); // 3
// console.log(queue1); // {'1': 3}, start: 1, counter: 2
// console.log(queue1.dequeue());
// console.log('queue empty?:', queue1.isEmpty()); // true
// console.log(queue1); // empty

class Node {
  constructor(data, children) {
    this.data       = data;
    this.children   = children;
    this.visited    = false;
  }
}

function bfs(node) {
  const queue     = new Queue();
  let traversed   = [];
  queue.enqueue(node);

  while(!queue.isEmpty()) {
    let current = queue.dequeue();
    current.children.forEach( child => queue.enqueue(child) );
    traversed.push(current.data);
  }

  return traversed;
}

const seven   = new Node(7  , []);
const six     = new Node(6  , []);
const four    = new Node(4  , []);
const five    = new Node(5  , []);
const three   = new Node(3  , [six  , seven] );
const two     = new Node(2  , [four , five]  );
const start   = new Node(1  , [two  , three] );

//console.log(start);
console.log('visited: ', bfs(start));