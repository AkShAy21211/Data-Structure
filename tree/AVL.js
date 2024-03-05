class AVLTreeNode {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.height = 1;
      this.left = null;
      this.right = null;
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Helper function to get the height of a node
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    // Helper function to update the height of a node
    updateHeight(node) {
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
  
    // Helper function for left rotation
    leftRotate(y) {
      const x = y.right;
      const T2 = x.left;
  
      x.left = y;
      y.right = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    // Helper function for right rotation
    rightRotate(x) {
      const y = x.left;
      const T2 = y.right;
  
      y.right = x;
      x.left = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    // Helper function to get the balance factor of a node
    getBalanceFactor(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    // Insert a key-value pair into the AVL tree
    insert(key, value) {
      this.root = this._insert(this.root, key, value);
    }
  
    _insert(node, key, value) {
      // Perform standard BST insertion
      if (!node) {
        return new AVLTreeNode(key, value);
      }
  
      if (key < node.key) {
        node.left = this._insert(node.left, key, value);
      } else if (key > node.key) {
        node.right = this._insert(node.right, key, value);
      } else {
        // Duplicate keys are not allowed in AVL trees
        return node;
      }
  
      // Update height of the current node
      this.updateHeight(node);
  
      // Get the balance factor to check if the node became unbalanced
      const balance = this.getBalanceFactor(node);
  
      // Perform rotations to restore balance
      // Left Heavy
      if (balance > 1) {
        if (key < node.left.key) {
          // Left-Left Case
          return this.rightRotate(node);
        } else {
          // Left-Right Case
          node.left = this.leftRotate(node.left);
          return this.rightRotate(node);
        }
      }
  
      // Right Heavy
      if (balance < -1) {
        if (key > node.right.key) {
          // Right-Right Case
          return this.leftRotate(node);
        } else {
          // Right-Left Case
          node.right = this.rightRotate(node.right);
          return this.leftRotate(node);
        }
      }
  
      return node;
    }
  
    // Perform in-order traversal of the AVL tree
    inOrderTraversal(node = this.root) {
      if (node) {
        this.inOrderTraversal(node.left);
        console.log(`${node.key}: ${node.value}`);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
  const avlTree = new AVLTree();
  avlTree.insert(10, 'A');
  avlTree.insert(20, 'B');
  avlTree.insert(30, 'C');
  console.log(avlTree);
  console.log("In-order Traversal of AVL Tree:");
  avlTree.inOrderTraversal();
  