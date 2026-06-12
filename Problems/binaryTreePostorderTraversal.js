/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var postorderTraversal = function (root) {



    const arr = [];

    const traverse = (root, arr) => {

        if (!root) return arr;


        traverse(root.left, arr)
        traverse(root.right, arr)
        arr.push(root.val);

    }

    traverse(root, arr);
    return arr;

};

