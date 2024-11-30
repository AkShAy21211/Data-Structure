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

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node  = new Node(value)
        if(this.isEmpty()){

            this.root = node;
        }else{

            this.inserNode(this.root,node)
        }
    }


    inserNode(root,node){
        if(node.value < root.value){

            if(root.left === null){

                root.left = node
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
        }else{
        if(root.value === key){
            return true;
        }else if(key< root.value){

            return this.search(root.left, key);
        }else{

            return this.search(root.right,key)
        }
    }
}


findClosest(data){

    if(!this.root) return null;
    return this._findClosest(this.root,data,Number.MAX_SAFE_INTEGER)
}

_findClosest(root,data,closest){

    if(!root) return closest;

    if(Math.abs(data - root.value) < Math.abs(data - closest)) closest = root.value;

    closest = this._findClosest(root.left,data,closest);
    closest = this._findClosest(root.right,data,closest);


    return closest;
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

min(root){
    if(!root.left){
        return root.value;
    }else {
        return this.min(root.left);
    }
}
max(root){

  if(!root.right){
    return root.value
  }else{
    this.max(root.right);
  }
}

}


const bst = new BST();

bst.insert(10);
bst.insert(20);
bst.insert(30);

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,20));

console.log(bst.search(bst.root,30));

console.log(bst.search(bst.root,40));

console.log("close of 16",bst.findClosest(11));

