class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }

  dequeue() {
    if (this.isEmpty()) return -1;
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

function reverseQueue(queue) {
  let stack = [];
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

reverseQueue(queue);

console.log("Reversed Queue:");
queue.print();
