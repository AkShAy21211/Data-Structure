class Node{

    constructor(value){

        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    isEmpty(){
       return this.root === null;

    }


    insert(value){

        const node  = new Node(value);
        if(this.isEmpty()){
            this.root = value;
        }else{
            this.inserNoe(this.root,value);
        }

    }

    inserNoe(root,value){

        if(node.value<root.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.inserNoe(root.left,value);
            }
            
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.inserNoe(root.right,node)
            }
        }
    }
}