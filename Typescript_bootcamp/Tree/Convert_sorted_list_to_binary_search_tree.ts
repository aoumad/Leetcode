class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) return null;

    const findMiddle = (start: ListNode, end: ListNode | null): ListNode => {
        let slow = start;
        let fast = start;
        while (fast !== end && fast.next !== end) {
            slow = slow.next!;
            fast = fast.next!.next!;
        }
        return slow;
    };

    const buildBST = (start: ListNode, end: ListNode | null): TreeNode | null => {
        if (start === end) return null;

        const mid = findMiddle(start, end);
        const root = new TreeNode(mid.val);
        root.left = buildBST(start, mid);
        root.right = buildBST(mid.next!, end);
        return root;
    };

    return buildBST(head, null);
}