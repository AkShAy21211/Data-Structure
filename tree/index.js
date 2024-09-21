class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) return false;

    if (root.value === value) return true;

    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    return -1;
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
    return -1;
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
    return -1;
  }
  levelOrder(root) {
    if (!root) return;
    let queue = [root];

    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  min(root) {
    if (!root.left) return root.value;

    return this.min(root.left);
  }
  max(root) {
    if (!root.right) return root.value;
    return this.max(root.right);
  }
   delete(value) {
    if (!this.root) return null;
    this.root = this.deleteNode(this.root, value);
    return this.root;
  }

  deleteNode(root, value) {
    if (!root) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node with the value found

      // Node with only one child or no child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      root.value = this.min(root.right);

      // Delete the inorder successor
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }

}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.preOrder(bst.root);

console.log("-----------------");

bst.inOrder(bst.root);

console.log("-----------------");

bst.postOrder(bst.root);

console.log("-----------------");


console.log("-----------------");

console.log("Min: ", bst.min(bst.root));

console.log("-----------------");

console.log("Max: ", bst.max(bst.root));

console.log("-----------------");

console.log(bst.delete(10));
console.log(bst.delete(15));

console.log("-----------------");

bst.levelOrder(bst.root);
