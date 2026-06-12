class KaryTreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  function maxDepth(root) {
    if (!root) {
      return 0;
    }
  
    let maxChildDepth = 0;
    for (const child of root.children) {
      const childDepth = maxDepth(child);
      maxChildDepth = Math.max(maxChildDepth, childDepth);
    }
  
    return 1 + maxChildDepth;
  }
  function countElements(node) {
    if (!node) {
        return 0;
    }

    let count = 1; // Count the current node
    for (const child of node.children) {
        count += countElements(child); // Recursively count the children
    }

    return count;
}
  // Example usage:
  const treeRoot = new KaryTreeNode(1);
  treeRoot.children.push(new KaryTreeNode(2));
  treeRoot.children.push(new KaryTreeNode(3));
  treeRoot.children[0].children.push(new KaryTreeNode(4));
  treeRoot.children[0].children.push(new KaryTreeNode(5));
  
  console.log(maxDepth(treeRoot)); // Output: 3
  console.log('Number of elemnts in tree',countElements(treeRoot));
