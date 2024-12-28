class CircularLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new CircularLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode; // Circular reference for a single node
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }

    return this;
  }

  remove(value) {
    if (!this.head) return null;

    let current = this.head;
    let previous = null;

    // Special case: if the node to remove is the head
    do {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          // If there's only one node in the list
          if (current.next === this.head) {
            this.head = null;
          } else {
            let tail = this.head;
            while (tail.next !== this.head) {
              tail = tail.next;
            }
            this.head = this.head.next;
            tail.next = this.head;
          }
        }
        return this;
      }
      previous = current;
      current = current.next;
    } while (current !== this.head);

    return null; // Value not found
  }

  print() {
    if (!this.head) return;

    let current = this.head;
    const result = [];

    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }
}

// Example usage

const circularList = new CircularLinkedList();
circularList.add(1).add(2).add(3).add(4).add(5);
circularList.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5
