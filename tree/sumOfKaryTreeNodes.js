//sum of node of k-array tree
class KArrayTreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  function sumOfNodesInKArrayTree(root){

   
    if(!root) return 0;
    let sum  = root.value;

    for(const val of root.children){
      sum+= sumOfNodesInKArrayTree(val)
    }
    return sum
  }
 
  
  // Example usage:
  const root = new KArrayTreeNode(1);
  root.children.push(new KArrayTreeNode(2));
  root.children.push(new KArrayTreeNode(3));
  root.children.push(new KArrayTreeNode(4));
  
  root.children[0].children.push(new KArrayTreeNode(5));
  root.children[0].children.push(new KArrayTreeNode(6));
  
  const totalSum = sumOfNodesInKArrayTree(root);
  console.log("Sum of Nodes in the K-Array Tree:", totalSum); // Output: 21
