class KaryTreeNode {
  constructor(value, k) {
      this.value = value;
      this.children = new Array(k).fill(null);
  }
}

class KaryTree {
  constructor(k) {
      this.root = null;
      this.k = k;
  }

  insert(value) {
      if (!this.root) {
          this.root = new KaryTreeNode(value, this.k);
      } else {
          this._insert(value, this.root);
      }
  }

  _insert(value, currentNode) {
      for (let i = 0; i < this.k; i++) {
          if (!currentNode.children[i]) {
              currentNode.children[i] = new KaryTreeNode(value, this.k);
              return;
          } else if (value < currentNode.children[i].value) {
              this._insert(value, currentNode.children[i]);
              return;
          }
      }
  }

  // Pre-order traversal
  preOrderTraversal(node = this.root) {
      if (node) {
          console.log(node.value);
          for (let i = 0; i < this.k; i++) {
              this.preOrderTraversal(node.children[i]);
          }
      }
  }

  // Post-order traversal
  postOrderTraversal(node = this.root) {
      if (node) {
          for (let i = 0; i < this.k; i++) {
              this.postOrderTraversal(node.children[i]);
          }
          console.log(node.value);
      }
  }

  // In-order traversal (not meaningful for a general k-ary tree)
  inOrderTraversal(node = this.root) {
      console.log("In-order traversal is not meaningful for a general k-ary tree.");
  }

  // Height of the tree
  height(node = this.root) {
      if (!node) {
          return 0;
      }

      let maxHeight = 0;
      for (let i = 0; i < this.k; i++) {
          const childHeight = this.height(node.children[i]);
          maxHeight = Math.max(maxHeight, childHeight);
      }

      return maxHeight + 1;
  }

  // Number of elements in the tree
  countElements(node = this.root) {
      if (!node) {
          return 0;
      }

      let count = 1;
      for (let i = 0; i < this.k; i++) {
          count += this.countElements(node.children[i]);
      }

      return count;
  }
}

// Example usage
const kTree = new KaryTree(3);

kTree.insert(10);
kTree.insert(5);
kTree.insert(15);
kTree.insert(3);
kTree.insert(8);
kTree.insert(12);
kTree.insert(18);

console.log("Pre-order traversal:");
kTree.preOrderTraversal();

console.log("\nPost-order traversal:");
kTree.postOrderTraversal();

console.log("\nHeight of the tree:", kTree.height());
console.log("Number of elements in the tree:", kTree.countElements());
