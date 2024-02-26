class Stack{

    constructor(){

        this.stack = [];
        this.size = 0;
        this.top = null;
    }


    push(value){

            this.stack.push(value);
            this.top = value;
            this.size++;
        

    }
    pop(){

        let popValue ;

        if(this.isEmpty()){

            return "Stack is empty"
        }else{
            if(this.size>1){
                
                popValue = this.top;
                this.top = this.stack[this.size - 2];

            }else{
                popValue = this.top;
                this.top = null;
            }

            this.size--;
        }

        return popValue

      
    }

    peek(){
        if(this.isEmpty()){

            return "Stack is empty";
        }

        return this.top;


    }

    print(){

        if(this.isEmpty()) return "Stach is empty";
        let value = "";
        for(let i=0; i<this.size; i++){

            value+= this.stack[i]+ " ";
        }

        return value;
    }

    isEmpty(){

        return this.size === 0 ;
    }


}

const stack  = new Stack();
stack.push(10);
stack.push(40);
stack.push(100)

