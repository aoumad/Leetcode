class Solution:
    def isPalindrome(self, x: int) -> bool:
        if (x < 0):
            return False
        rev_x = 0
        original_x = x

        while x > 0:
            rev_x = rev_x * 10 + x % 10
            x //= 10

        return rev_x == original_x