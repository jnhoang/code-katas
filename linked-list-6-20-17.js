// linked list
// need a node to store data
    // initiate with start and end
    // add a node to front
      // instantiate new node
    // add to end
    // delete from front
    // delete from end
    // print all
    // get length

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.start  = null;
    this.end    = null;
  }
  isEmpty() {
    return this.start === null;
  }
  addAtStart(node) {
    if (this.isEmpty()) {
      this.start  = node;
      this.end    = node;
      return;
    }

    let temp = this.start;

    this.start  = node;
    node.next   = temp;
  }
  addAtEnd(node) {
    if (this.isEmpty()) {
      this.start  = node;
      this.end    = node;
      return;
    }

    this.end.next   = node;
    this.end        = node;
  }
  deleteAtStart() {
    if (this.isEmpty()) {
      return console.log('delete at start: Empty List');
    }
    if (this.start.next === null) {
      this.start  = null;
      this.end    = null;
    }

    this.start = this.start.next;
  }
  deleteAtEnd() {
    if (this.isEmpty()) {
      return console.log('delete at end: Empty List');
    }
    if (this.start.next === null) {
      this.start  = null;
      this.end    = null;
    }

    let current = this.start;

    while (current.next !== this.end) {
      current = current.next;
    }

    this.end      = current;
    current.next  = null;
  }
  printList() {
    if (this.isEmpty()) {
      return console.log('print: Empty List');
    }

    let current   = this.start;
    let list      = [];

    while (current !== null) {
      list.push(current.data);
      
      current = current.next;
    }

    return list;
  }
}

const node1 = new Node(1)
,     node2 = new Node(2)
,     node3 = new Node(3)
,     node4 = new Node(5)
,     node5 = new Node(4);

const list = new LinkedList;
list.deleteAtStart();          // empty
list.deleteAtEnd();            // empty
list.addAtStart(node1);
list.addAtStart(node2);
console.log(list);             // start: 2, end: 1
list.addAtEnd(node3);
console.log(list);             // end: 3
list.addAtEnd(node4);
list.addAtEnd(node5);
list.deleteAtStart();
list.deleteAtEnd();
console.log(list);             // start: 1, end: 5
console.log(list.printList()); // [1, 3, 5]