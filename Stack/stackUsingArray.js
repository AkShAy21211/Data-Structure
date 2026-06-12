// implientation of stack using Array

class Stack{
    constructor(){
        this.element = [];
    }
    
    isEmpty() {
        return this.element.length == 0;
    }
    push(value){
        return this.element.push(value);
    }
    pop(){
        return this.element.pop();
    }
    print(){
        console.log(this.element.toLocaleString());
    }
}



const stack  = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); 
stack.print();

/**
 * valid paranthesis
 * queue using stack
 * stack using queue
 * impliment doule ended queue
 * 5 Sorting(best,worst, space , adv,disadv);
 * delete midlle element in stack
 * infix, postfix and pritfix
 */