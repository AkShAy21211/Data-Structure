class Stack{

  constructor(){

    this.item = [];
    this.top = null;
    this.size = 0;
  }

  push(value){
      this.item.push(value);
      this.top = value;
      this.size++;
  }

  pop(){

    if(this.isEmpty()){

    return "Stack is empty can't perform pop";
    }else{
      
      if(this.size>1){

        this.top = this.item[this.size - 2];
      }else{

        this.top = null;
      }

      this.size--;
    }
    

  }


  peek(){

    if(this.isEmpty()) return "Stack is empty";
    return this.top;

  }

  print(){

    if(this.isEmpty()) return "Stack is empty";

    let values = "";

    for(let i=0; i<this.size; i++){

      values += this.item[i]+ " ";
    }

    return values;
  }
  isEmpty(){

    return this.size === 0;
  }
}


const stack  = new Stack();

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
