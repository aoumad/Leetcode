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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];

    if (!root)
        return ([]);

    const sum_helper = (node: TreeNode | null, current: number[], sum: number) =>
    {
        if (!node)
            return;

        sum += node.val;
        if (sum === targetSum && !node.left && !node.right)
        {
            result.push([...current, node.val]);
            return;
        }

        sum_helper(node.left, [...current, node.val], sum);
        sum_helper(node.right, [...current, node.val], sum);
    }

    sum_helper(root, [], 0);
    return (result);
};