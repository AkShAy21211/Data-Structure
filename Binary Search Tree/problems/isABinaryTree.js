class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (root.data > node.data) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (!root) {
            return root;
        }
        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // when the value is found
            if (!root.left && !root.right) {
                // if the root has no children
                return null;
            } else if (!root.right) {
                // if only the left child exists
                return root.left;
            } else if (!root.left) {
                // if only the right child exists
                return root.right;
            } else {
                // when the node has two children
                // find replace the node with inorder successor
                // and delete it.
                root.data = this.min(root.right);
                root.right = this.deleteNode(root.right, root.data);
            }
        }
        return root;
    }

    min(root) {
        if (!root.left) {
            return root.data;
        } else {
            return this.min(root.left);
        }
    }

    // function for checking if a Binary Tree is valid;
   isValid(){

    if(!this.root) return true;

    return this._isValid(this.root,null,null);

   }

   _isValid(root,min,max){

    if(!root) return true;

    if(min !== null && root.value <= min){
        return false;
    }
    if(max !== null && root.value >= max){

        return false;
    }


    return this._isValid(root.left,min,root.value) && this._isValid(root.right,root.value,max);
   }

    inOrderTraversal(root) {
        if (root) {
            this.inOrderTraversal(root.left);
            console.log(root.data);
            this.inOrderTraversal(root.right);
        }
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(12);
bst.insert(8);


bst.inOrderTraversal(bst.root);
console.log(bst.isValid()); 
