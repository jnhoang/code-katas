class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.start  = null;
    this.end    = null;
  }
  addAtStart(data) {
    let n = new Node(data);

    if (this.start == null) {
      this.start  = n;
      this.end    = n;
    } 
    else if (this.start.next == null) {
      n.next      = this.start;
      this.start  = n;
    } 
    else {
      n.next = this.start;
      this.start = n;
      this.start.next;
    } 
  }
  addAtEnd(data) {
    let n = new Node(data);

    this.end.next = n;
    this.end = n;
  }
  removeAtEnd() {
    let temp = this.start;

    if (this.start === null) {
      return;
    }
    else if (this.start.next === null) {
      this.start  = null;
      this.end    = null;
    }
    while (temp.next !== this.end) {
      temp = temp.next;
    }
    this.end    = temp;
    temp.next   = null;
  }
  removeAt(node) {

  }
  printData() {
    if (!this.start) {
      return 'empty';
    }

    let arr = [];
    let current = this.start;
    
    arr.push(current.data);
    while (current.next !== null) {
      arr.push(current.next.data);
      current = current.next;
    }

    return arr;
  }
  printLength() {
    let ctr = 1;
    let current = this.start;
    
    while (current.next != null) {
      current = current.next;
      ctr++;
    }

    return ctr;
  }
}


var one = new LinkList;
one.addAtStart(3);
console.log(one);
one.addAtStart(2);
one.addAtStart(1);
console.log(one);
one.removeAtEnd();
console.log(one);
one.addAtEnd(3);
console.log(one);
console.log(one.printData());
console.log(one.printLength());