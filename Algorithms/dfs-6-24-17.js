class Stack {
  constructor() {
    this.storage  = {};
    this.count    = 0;
  }
  isEmpty(){
    return this.count === 0;
  }
  enqueue(val) {
    this.storage[this.count]    = val;
    this.count                  += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log('is empty');
    }
    this.count    -= 1;
    let temp      = this.storage[this.count];
    delete          this.storage[this.count];

    return temp;
  }
}

class Node {
  constructor(val, children) {
    this.val        = val;
    this.children   = children;
    this.visited    = false;
  }
}
// var stack1 = new Stack();
// stack1.dequeue(); // 'stack is currently empty'
// console.log(stack1);
// stack1.enqueue(1);
// stack1.enqueue(3);
// var test = stack1.dequeue();
// console.log('test:', test); // 3
// console.log('isempty?:', stack1.isEmpty()); // false
// console.log(stack1); // {'0': 1}, counter: 1

const seven   = new Node(7  , [])
,     six     = new Node(6  , [])
,     four    = new Node(4  , [])
,     five    = new Node(5  , [])
,     three   = new Node(3  , [six  , seven] )
,     two     = new Node(2  , [four , five]  )
,     start   = new Node(1  , [two  , three] );

//console.log(start);
console.log('visited: ', dfs(start));
// 1       -> 1 -> [2, 3]       // 1
// 2, 3    -> 3 -> [2, 6, 7]    // 1, 3
// 2, 6, 7 -> 7 -> [2, 6]       // 1, 3, 7
// 2, 6    -> 6 -> [2]          // 1, 3, 7, 6
// 2       -> 2 -> [4, 5]       // 1, 3, 7, 6, 2
// 4, 5    -> 5 -> [4]          // 1, 3, 7, 6, 2, 5 
// 4       -> 4 -> []           // 1, 3, 7, 6, 2, 5, 4

function dfs(node) {
  let visitedArr  = [];
  let stack       = new Stack;
  stack.enqueue(node);

  while (!stack.isEmpty()) {
    let current       = stack.dequeue();
    current.visited   = true;
    current.children.forEach( (child) => stack.enqueue(child) );
    visitedArr.push(current.val);
  }

  return visitedArr;
}