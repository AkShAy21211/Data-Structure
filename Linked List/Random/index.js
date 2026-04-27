class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  inseart(idx, value) {
    if (idx < 0 || idx > this.size) {
      throw new Error("Index out of bounds");
    }
    if (idx === 0) {
      this.prepend(value);
      return;
    }
    if (idx === this.size) {
      this.append(value);
      return;
    }
    const node = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < idx) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
    this.size++;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.size) {
      throw new Error("Index out of bounds");
    }
    if (idx === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    if (idx === this.size - 1) {
      this.tail = null;
      this.size--;
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < idx) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.size--;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous
    return this;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current && current.next !== null) {
      previous = current;
      current = current.next;
      if (current.data === value) {
        previous.next = current.next;
        this.size--;
        return;
      }
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

   
  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + "->";
      current = current.next;
    }
    return result;
  }
  displayAsArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

// Example usage
debugger;
const list = new NodeList();

list.append(1);
list.append(2);
list.append(3);
list.append(8);
list.append(4);
list.append(5);
console.log(list.display()); // Output: 1->2->3->8->4->5->

// list.remove(3); // Remove element at index 3 (which is 8)
// list.removeValue(3); // Try to remove value 10 (not in the list)
console.log(list.display()); // Output: 1->2->3->4->5->
console.log(list.search(4)); // Output: 3
list.reverse();
console.log(list.display()); // Output: 5->4->3->2->1->
// Operation	                              Singly Linked List	        Doubly Linked List
// Access an element	                            O(n)                         O(n)
// Insertion at the beginning	                    O(1)	                       O(1)
// Insertion at the end	                          O(n)	                       O(1)
// Insertion at a specific position	              O(n)	                       O(n)
// Deletion at the beginning	                    O(1)	                       O(1)
// Deletion at the end	                          O(n)	                       O(1)
// Deletion at a specific position	              O(n)	                       O(n)
// Reversing the list	                            O(n)	                       O(n)
// Searching for an element	                      O(n)	                       O(n)

module.exports = {
  NodeList,
  Node,
};
