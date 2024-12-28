class Node {
  constructor(value) {
    this.data = value;
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
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.tail = node;
    }
    this.size++;
  }

  display() {
    let output = "";
    let current = this.head;

    while (current) {
      output += current.data + "->";
      current = current.next;
    }
    return output;
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
debugger
const list = new NodeList();

list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);
list.append(5);


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
