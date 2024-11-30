class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  ifEmpty() {
    return this.currentLength === 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }

  enqueue(value) {
    if (!this.isFull()) {
      this.rear = this.rear + 1;
      this.items[this.rear] = value;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      throw new Error("Queue is full");
    }
  }
}

