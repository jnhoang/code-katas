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
  addAtStart(data) {
    let node = new Node(data);

    if (this.isEmpty()) {
      this.start  = node;
      this.end    = node;
      return;
    }

    let temp = this.start;

    this.start  = node;
    node.next   = temp;
  }
  addAtEnd(data) {
    let node = new Node(data);

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
  deleteValAt(node) {
    if (this.isEmpty()) {
      return console.log('deleteValAt: Empty List');
    }
    if (this.start.data == node && this.start.next === null) {
      this.start  = null;
      this.end    = null;
    }

    let current = this.start;

    while (current.next.data !== node) {
      current = current.next;
    }

    let nodeToDelete    = current.next;

    current.next        = nodeToDelete.next;
    nodeToDelete.next   = null;
  }
  deleteIndexAt
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

const list = new LinkedList;
list.deleteAtStart();          // empty
list.deleteAtEnd();            // empty
list.addAtStart(1);
list.addAtStart(2);
console.log(list);             // start: 2, end: 1
list.addAtEnd(3);
console.log(list);             // end: 3
list.addAtEnd(4);
list.addAtEnd(5);
list.addAtEnd(6);
list.deleteAtStart();
list.deleteAtEnd();
console.log(list);             // start: 1, end: 5      // CHECK THIS
console.log(list.printList() + ' // [1, 3, 4, 5]');
list.deleteValAt(3);
console.log(list.printList() + ' // [1, 3, 4]');