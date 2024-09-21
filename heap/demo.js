class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(parent) {
    return Math.floor((parent - 1) / 2);
  }
  getLeftChildIndex(parent) {
    return 2 * parent + 1;
  }
  getRightChildIndex(parent) {
    return 2 * parent + 2;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  peek() {
    return this.heap[0];
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2],this.heap[index1]];
  }
  add(data) {
    this.heap.push(data);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }
  remove() {
    let data = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return data;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largestChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largestChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] > this.heap[largestChildIndex]) {
        break;
      } else {
        this.swap(index, largestChildIndex);
      }

      index = largestChildIndex;
    }
  }
   display(){

        let output = "";
        for(let data of this.heap){

            output+= `${data},`
        }

        return output;
    }
}
