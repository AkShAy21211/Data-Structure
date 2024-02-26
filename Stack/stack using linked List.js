
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }
   
    pop(){

        if(this.isEmpty()) return "Stack is empty";

        let deleteItem = this.top.data;
        this.top = this.top.next;
        this.size--;

        return deleteItem;
    }


    peak(){

        if(this.isEmpty()) return "Stack is empty";
        return this.top.data;
    }

    print(){

      
        let current = this.top;

        while(current){
            console.log(current.data);
            current = current.next;
        }


    }

    isEmpty(){

        return this.size === 0;
    }
}

let stack  = new Stack(); 

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.print();

console.log("==========================");
console.log(stack.pop());

console.log("==========================");

console.log(stack.peak());

console.log("===========================");

console.log(stack);


console.log("==============================");

stack.print();
