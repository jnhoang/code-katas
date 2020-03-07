class Queue {
  constructor() {
    this.storage  = {};
    this.counter  = 0;
    this.start    = 0;
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

class Node {
  constructor(val, children) {
    this.val        = val;
    this.children   = children;
    this.isVisited  = false;
  }
}

// TEST VALUES

// var queue1 = new Queue();
// queue1.dequeue();  // 'queue is currently empty'
// queue1.enqueue(1);
// queue1.enqueue(3);
// var test = queue1.dequeue();
// console.log('test:', test); // 1
// console.log('isempty?:', queue1.isEmpty()); // false
// console.log(queue1); // {'1': 3}, counter: 2
// console.log(queue1.dequeue()); // 3
// console.log('queue empty?:', queue1.isEmpty()); // true
// console.log(queue1); // { empty }, start: 2, counter 2
const seven   = new Node(7  , [])
,     six     = new Node(6  , [])
,     four    = new Node(4  , [])
,     five    = new Node(5  , [])
,     three   = new Node(3  , [six  , seven] )
,     two     = new Node(2  , [four , five]  )
,     start   = new Node(1  , [two  , three] );

//console.log(start);
console.log('visited: ', bfs(start));

function bfs(node) {
  let visitedArr  = [];
  let queue       = new Queue;
  
  queue.enqueue(node);

  while (!queue.isEmpty()) {
    let current = queue.dequeue();

    current.children.forEach( (child) => queue.enqueue(child) );
    current.isVisited = true;
    visitedArr.push(current.val);
  }

  return visitedArr;
}