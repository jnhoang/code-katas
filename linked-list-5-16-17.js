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
}
LinkList.prototype.addAtStart = function(data) {
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
LinkList.prototype.addAtEnd = function(data) {
  let n = new Node(data);

}
LinkList.prototype.removeAtStart = function() {

}
LinkList.prototype.removeAtEnd = function() {
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
LinkList.prototype.removeAt = function(node) {

}
LinkList.prototype.printData = function() {

}
LinkList.prototype.printLength = function() {

}
var one = new LinkList;
one.addAtStart(3);
console.log(one);
one.addAtStart(2);
one.addAtStart(1);
console.log(one);
one.removeAtEnd();
console.log(one);