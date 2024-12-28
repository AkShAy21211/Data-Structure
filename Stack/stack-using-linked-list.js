class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.top = node;
    }

    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    const deleteNode = this.top;
    this.top = this.top.next;
    this.size--;
    return deleteNode.data;
  }

  peek() {
    return this.top.data;
  }
  clear() {
    this.top = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  display() {
    let output = "";

    let current = this.top;

    while (current) {
      output += `${current.data}=>`;
      current = current.next;
    }
    return output;

  }

  reverse() {
    let current = this.top;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.top = prev;
  }

}


const myList = new Stack();
//add 5 values


// complexity


// Time Complexity: O(n)
// Space Complexity: O(1)


// advantages of stack:

// 1. LIFO (Last In First Out)
// 2. Supports push, pop, peek operations
// 3. Supports efficient retrieval of top elemen




// disadvantages of stack:

// 1. Cannot be used to search an element
// 2. Cannot be used to remove an element from the middle
// 3. Cannot be used to duplicate elements
// 4. Cannot be used to sort elements
// 5. Cannot be used to handle large data sets efficiently
// 6. Cannot be used to handle nested data structures






export {
  Stack,
}