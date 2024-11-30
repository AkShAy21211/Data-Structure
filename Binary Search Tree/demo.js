class Node{

    constructor(value){

        this.value = value;
        this.left = null;
        this.right = null;
    }


}

class BST{

    constructor(){

        this.root = null;
    }

    insert(value){

        const node  = new Node(value)
        if(this.root=== null){

            this.root = node;
        }else{

            this.insertNode(this.root,node);
        }
    }


    search(root,value){

        if(!root){
            return false;
        }

        if(root.value === value){
            return true;
        }else if(value < root.value){

            return this.search(root.left,value)
        }else{

            return this.search(root.right,value);
        }

    }
    insertNode(root,node){

        if(root.value < node.value){

            if(root.left === null){

                root.left = node;
            }else{

                this.insertNode(root.left,node);
            }
        }else{

            if(root.right === null){

                root.right = node;
            }else{

                this.insertNode(root.right,node);
            }
        }
    }


    delete(value){

        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){

        if(!root){

            return;
        }
        if(value < root.left){

                root.left = this.deleteNode(root.left,value);

        }else if(value >  root.value){

            root.right = this.deleteNode(root.right,value);
        }else{

            if(!root.right && !root.left){
                return null;
            }else if(!root.right){

                return root.left;
            }else if(!root.left){

                return root.right;
            }else{

                root.value = this.min(root.right);
                root.right = this.deleteNode(root.right,root.value)
            }

            return root;
        }
        
        
    }

    min(root){
        if(!root.left) return root.value
        return this.min(root.left);
    }

    max(root){
        if(!root.right) return root.value;
        return this.max(root.right);
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

    findClosest(value){

        if(!this.root) return null;
        return this._findClosest(this.root,value,Number.MAX_SAFE_INTEGER);
    }

    _findClosest(root,value,closest){

        if(!root) return closest;

        if(Math.abs(value - root.value) < Math.abs(value - closest)) closest = root.value;

        closest = this._findClosest(root.left,value,closest);
        closest = this._findClosest(root.right,value,closest);

        return closest; 
    }

     isValid(){

        if(!this.root) return true;
        return this._isValid(this.root,null,null);
     }

     _isValid(root,min,max){

        if(!root) return true;

        if(min !== null && root.left <= min){
            return false;
        }

        if(max !== null && root.right >= max){
            return false;
        }

        return this._isValid(root.left,min,root.value) && this._isValid(root.right,root.value,max)
     }

     levelOrder(){

        let queue = [];
        queue.push(this.root);
        while(queue.length){

            let curr = queue.shift();
            console.log(curr.value);

            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){

                queue.push(curr.right);
            }
        }
     }
}



debugger;
const bst = new BST();

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