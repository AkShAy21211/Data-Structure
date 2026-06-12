class Node{

    constructor(value){

        this.value = value;
        this.right = null;
        this.left = null;
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
            this.root  = node;
        }else{

            this.inserNode(this.root,node);
        }
    }

    inserNode(root,node){

        if( node.value < root.value){

            if(root.left === null){
                root.left = node;
            }else{

                this.inserNode(root.left,node)
            }
        }else{

            if(root.right === null){
                root.right = node;
            }else{

                this.inserNode(root.right,node)
            }
        }
    }

    search(root,key){

        if(!root){
            return false;
        }

        if(root.value === key){
            return true;
        }else if(key < root.value){

            return this.search(root.left,key);
        }else{

            return this.search(root.right,key);

        }
        }

        min(root){
            if(!root.left){
                return root.value;
            }else{

               return this.min(root.left);
            }

        };
        max(root){
            if(!root.right){
                return root.value;
            }else{

               return this.max(root.right);
            }

        }

        preOrder(root){

        
            if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
            }
        }
        
        inOrder(root){


            if(root){
                this.inOrder(root.left);
                console.log(root.value);
                this.inOrder(root.right);
            }
          
        }

        
        postOrder(root){

           if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
           }

        }


        delete(value) {
            this.root = this.deleteNode(this.root, value);
        }   

        deleteNode(root, value) {
            if (!root) {
                return root;
            }
            if (value < root.value) {
                root.left = this.deleteNode(root.left, value);
            } else if (value > root.value) {
                root.right = this.deleteNode(root.right, value);
            } else {
                // when the value finds
    
                if (!root.left && !root.right) {
                    return null; // delete the node when having no childs
                } else if (!root.right) {
                    return root.left; // replace the node with its child;
                } else if (!root.left) {
                    return root.right // replace the node with its child
                } else {
                    // if the node have 2 child copy the value of inorder Successor and delete it
                    root.value = this.min(root.right);
                    root.right = this.deleteNode(root.right, root.value);
                }
                return root;
            }
        }

        levelOrder(){
            let queue = [];
                queue.push(this.root);
                while(queue.length){

                    let current = queue.shift();
                    console.log(current.value);

                    if(current.left){

                        queue.push(current.left)
                    }

                    if(current.right){

                        queue.push(current.right)
                    }
                

            }

        }


        findClosest(data){

            if(!this.root) return null;
            return this._findClosest(this.root,data,Number.MAX_SAFE_INTEGER);
        }

        _findClosest(node,data,closest){

            if(!node) return closest;

            if(Math.abs(data - node.value) < Math.abs(data - closest)) closest = node.value;

            closest = this._findClosest(node.left,data,closest);
            closest = this._findClosest(node.right,data,closest);


            return closest;
        }


        isValid(){
            if(!this.root) return true;
            return _isValid(this.root,null,null);
        }

        _isValid(root,min,max){

            if(!root) return true;

            if(min !== null && root.value <= min){

                return false;
            }

            if(max !== null && root.value >= max){
                return false;
            }

            return this._isvalid(root.left, min, root.value) && this._isvalid(root.right, root.value, max);

        }
    
    
    }


    const bst = new BinarySearchTree();

  
bst.insert(10)
  
bst.insert(15)
  
bst.insert(21)
  
bst.insert(55)
  
bst.insert(11)

    console.log(bst.search(bst.root,10));
    console.log(bst.min(bst.root));
    console.log(bst.max(bst.root));

    console.log('preOrder.....');
    bst.preOrder(bst.root);

    console.log('inOrder.....');
    bst.inOrder(bst.root);

    console.log('postOrder.....');
    bst.postOrder(bst.root);

    console.log('levelOrder.....');
    bst.levelOrder();


    console.log("closest value of 50",bst.findClosest(50));