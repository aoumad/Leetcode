/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isBalanced(root: TreeNode | null): boolean {
    const height = (node: TreeNode | null): number => {
        if (!node) return 0;
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };

    const isBalancedHelper = (node: TreeNode | null): boolean => {
        if (!node) return true;
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return isBalancedHelper(node.left) && isBalancedHelper(node.right);
    };

    return isBalancedHelper(root);
}