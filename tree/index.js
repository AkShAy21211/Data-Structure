class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorderTraversal(node) {
    if (node !== null) {
      inorderTraversal(node.left);
      console.log(node.value);
      inorderTraversal(node.right);
    }
  }
  
  function preorderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      preorderTraversal(node.left);
      preorderTraversal(node.right);
    }
  }
  
  function postorderTraversal(node) {
    if (node !== null) {
      postorderTraversal(node.left);
      postorderTraversal(node.right);
      console.log(node.value);
    }
  }
  
  // Create a sample binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Perform traversals
  console.log("Inorder Traversal:");
  inorderTraversal(root);
  
  console.log("\nPreorder Traversal:");
  preorderTraversal(root);
  
  console.log("\nPostorder Traversal:");
  postorderTraversal(root);
  