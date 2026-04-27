class Stack {
  constructor() {
    this.item = [];
    this.top = null;
    this.size = 0;
  }

  push(value) {
    this.item.push(value);
    this.top = value;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty can't perform pop";
    } else {
      if (this.size > 1) {
        this.top = this.item[this.size - 2];
      } else {
        this.top = null;
      }

      this.size--;
    }
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.top;
  }

  print() {
    if (this.isEmpty()) return "Stack is empty";

    let values = "";

    for (let i = 0; i < this.size; i++) {
      values += this.item[i] + " ";
    }

    return values;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.print());
stack.pop();
console.log(stack.print());

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack);
//how to get the min element from the stack in O(1) time
var MinStack = function () {
  this.stack = [];
  this.top = null;
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.top = val;
};

MinStack.prototype.pop = function () {
  if (this.isEmpty()) {
    return "Stack is empty can't perform pop";
  } else {
    this.stack.pop();
    this.top = this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }
};

MinStack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};

MinStack.prototype.getMin = function () {
  if (this.isEmpty()) {
    return "Stack is empty";
  }
  return Math.min(...this.stack);
};

// is Math.min O(1) time complexity? No, it is O(n) because it needs to iterate through the array to find the minimum value.

// How to optimize it to O(1) time complexity? consider each node in the stack haveing a minimum value
class MinStackOptimized {
  constructor() {
    this.stack = [];
  }

  push(val) {
    const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
    this.stack.push({ value: val, min: min });
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty can't perform pop";
    } else {
      this.stack.pop();
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1].min;
  }
}
const minStack = new MinStackOptimized();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin());
