class Node {
    constructor(value) {
        this.data = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.data === value) {
                return true;
            } else if (value < root.data) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.data);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.data;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.data;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        } else {
            if (value < root.data) {
                root.left = this.deleteNode(root.left, value);
            } else if (value > root.data) {
                root.right = this.deleteNode(root.right, value);
            } else {
                if (!root.left && !root.right) {
                    return null;
                }
                if (!root.left) {
                    return root.right;
                } else if (!root.right) {
                    return root.left;
                }

                root.data = this.min(root.right);
                root.right = this.deleteNode(root.right, root.data);
            }
        }
        return root; // Added this line
    }
}

const BST = new BinarySearchTree();

console.log(BST.isEmpty());

BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);

// Uncomment the following lines for testing various operations
console.log("element exist", BST.search(BST.root, 10));
console.log("element exist", BST.search(BST.root, 20));
console.log("element exist", BST.search(BST.root, 30));
console.log("element exist", BST.search(BST.root, 3));

console.log("PreOrder...............");
BST.preOrder(BST.root);
console.log("InOrder...............");
BST.inOrder(BST.root);
console.log("PostOrder...............");
BST.postOrder(BST.root);


BST.delete(5);
console.log(".................");
BST.levelOrder();
