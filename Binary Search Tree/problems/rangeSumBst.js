
// Range Sum of BST


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function rangeSumBST(root, low, high) {
    if (!root) {
        return 0;
    }

    let sum = 0;

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
}

// Example usage:
const root = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3), new TreeNode(7, new TreeNode(6), null)),
    new TreeNode(15, new TreeNode(13), new TreeNode(18, new TreeNode(1)))
);
const low = 6;
const high = 10;

console.log(rangeSumBST(root, low, high)); // Output: 32
