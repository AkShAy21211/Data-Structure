class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEpmty() {
    return this.size === 0;
  }

  append(val) {
    const node = new Node(val);
    if (this.isEpmty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(val) {
    const node = new Node(val);
    if (this.isEpmty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    this.head = prev
  }
  print() {
    let output = "";
    let current = this.head;

    while (current) {
      output += current.data + " -> ";
      current = current.next;
    }
    return output;
  }
}

// Example usage

const myList = new List();
myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.print()); // Output: 1 -> 2 -> 3 ->

myList.reverse();
console.log(myList.print()); // Output: 3 -> 2 -> 1 ->
