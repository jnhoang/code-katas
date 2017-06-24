

// linked list
  // linked list
    // initiate with start and end
    // add a node to front
      // instantiate new node
    // add to end
    // delete from front
    // delete from end
    // print all
    // get length


  // node
    // instantiates with data and next

// stacks
  // done with classes
  // initiate with 2 values
  // will use methods to add new functionality
    // what are 4 stack methods: peek, isempty
  // use 1 value to help track the other


  // gotchas
    // account for empty stacks
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



// queue
  // done with classes
  // initiate with 3 values
  // will use prototypes to add new functionality
  // use the fact of the additional value to implement functionality through a quirk

// TEST VALUES
  var empty = 'queue is currently empty';
  var queue1 = new Queue();
  queue1.dequeue();                               // 'queue is currently empty'
  queue1.enqueue(1);                              // 'enqueued 1'
  queue1.enqueue(3);                              // 'enqueued 3'
  var test = queue1.dequeue();
  console.log('test:', test);                     // 1
  console.log('isempty?:', queue1.isEmpty());     // false
  console.log(queue1);                            // {'1': 3}, start: 1, counter: 2
  console.log(queue1.dequeue());                  // 3
  console.log('queue empty?:', queue1.isEmpty()); // true
  console.log(queue1);                            // empty


// BFS

// enqueue
// dequeue
// push child values
// push val to visited array
// return visited arr

// TEST VALUES
const seven   = new Node(7  , []);
const six     = new Node(6  , []);
const four    = new Node(4  , []);
const five    = new Node(5  , []);
const three   = new Node(3  , [six  , seven] );
const two     = new Node(2  , [four , five]  );
const start   = new Node(1  , [two  , three] );

//console.log(start);
console.log('visited: ', bfs(start));




// quick sort 
  // new arr
  // pivot
  // based on higher or lower than pivot, move into a smaller/larger arr
  // recursively call quick sort
  // concat the 3 arrays


// merge sort
  // recursive
  // set base case

  // divide in half
  // sort each half

  // return merge of two halves
    // consider all cases
    // return array to mergeSort


// heap sort


// hash tables


// binary search trees

// queues

// stacks

