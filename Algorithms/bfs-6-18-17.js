class Queue {
  constructor() {
    this.storage  = {};
    this.counter  = 0;
    this.start    = 0;
  }
  isEmpty() {
    return this.counter === this.start;
  }
  enqueue(data) {
    this.storage[this.counter]    = data;
    this.counter                  += 1;
    console.log('enqueued: ', data);
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('dequeue: empty');
    }
    let val = this.storage[this.start];
    delete    this.storage[this.start];
    this.start += 1; 

    return val;
  }    
}


// var empty = 'queue is currently empty';
// var queue1 = new Queue();
// queue1.dequeue();                               // 'queue is currently empty'
// queue1.enqueue(1);                              // 'enqueued 1'
// queue1.enqueue(3);                              // 'enqueued 3'
// var test = queue1.dequeue();
// console.log('test:', test);                     // 1
// console.log('isempty?:', queue1.isEmpty());     // false
// console.log(queue1);                            // {'1': 3}, start: 1, counter: 2
// console.log(queue1.dequeue());                  // 3
// console.log('queue empty?:', queue1.isEmpty()); // true
// console.log(queue1);                            // empty


class Node {
  constructor(data, children) {
    this.data = data;
    this.children = children;
    this.visited = false;
  }
}

function bfs(node) {
  let searchQueue = new Queue();
  let visited = [];
  searchQueue.enqueue(node);

  while (!searchQueue.isEmpty()) {
    let current = searchQueue.dequeue();
    current.children.forEach( child => searchQueue.enqueue(child) );
    current.isVisited = true;
    visited.push(current.data);
  }
  return visited;
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