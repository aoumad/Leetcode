# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        def backtracking(root):
            if root is None:
                return 0

            left = right = root
            l = r = 1
            while left := left.left:
                l += 1
            while right := right.right:
                r += 1

            if l == r:
                return 2**l - 1
            else:
                return 1 + backtracking(root.left) + backtracking(root.right)

        return backtracking(root)