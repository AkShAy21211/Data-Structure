class Stack {

    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

}

class Queue{

    constructor(){

        this.s1 = new Stack();
        this.s2 = new Stack();
    }


    push(value){

        while(this.s1.items.length>0){
            this.s2.push(this.s1.pop());
        }
        this.s1.push(value);

        while(this.s2.items.length>0){
            this.s1.push(this.s2.pop());
        }
    }

    pop(){

        return this.s1.pop();
    }

    peek(){

        return this.s1.items[this.s1.items.length - 1];
    }

    isEmpty(){

        return this.s1.items.length === 0;
    }

    size(){

        return this.s1.items.length;
    }


}

const queue = new Queue();

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);

console.log(queue);

console.log(queue.pop()); // 10
console.log(queue.peek()); // 20
console.log(queue.isEmpty()); // false
console.log(queue.size()); // 4

