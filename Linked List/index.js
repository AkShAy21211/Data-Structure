class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    // This is the method that will be used
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    } else {
      let current = this.head;

      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          this.size--;
          return;
        }

        current = current.next;
      }
    }

    return console.log("Value not found in the list");
  }

  deletAllDuplicates() {
    let current = this.head;
    while (current) {
      let next = current.next;
      while (next) {
        if (current.value == next.value) {
          this.remove(next.value);
        }
        next = next.next;
      }
      current = current.next;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let output = [];
      let current = this.head;

      while (current) {
        output.push(current.value);
        current = current.next;
      }

      console.log(output.join("=>"));
    }
  }
}

const list = new LinkedList();

const arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const n of arr) {
  list.append(n);
}

list.deletAllDuplicates(2);
list.print(); // 10->20->30
