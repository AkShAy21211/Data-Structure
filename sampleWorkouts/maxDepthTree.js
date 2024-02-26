class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root) {
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Usage:
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);
  tree.left.right = new TreeNode(5);
  
  console.log(maxDepth(tree)); // Output: 3
  