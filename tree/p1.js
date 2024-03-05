//find height of the tree

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findHeight(node) {
    // Base case: if the node is null, return 0
    if (node === null) {
      return 0;
    }
  
    // Recursively calculate the height of the left and right subtrees
    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);
  
    // Return the maximum height of the left and right subtrees plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }
  function numberOfElements(root) {
    if (!root) return 0;

    return numberOfElements(root.left) + numberOfElements(root.right) + 1;
}

  
  // Example usage:
  
  // Creating a simple binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(7)

  
  // Finding the height of the tree
  const treeHeight = findHeight(root);
  
  console.log("Height of the tree:", treeHeight);

  console.log("elements of the tree:", numberOfElements(root));


  