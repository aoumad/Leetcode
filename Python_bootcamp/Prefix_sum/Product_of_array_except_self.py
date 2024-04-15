# naive approach, it has a O(3N) ~= O(N) time Complexity, but it takes another O(N) of space complexity
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n: int = len(nums)
        res: List[int] = [0] * n
        prefix: int = 1
        suffix: int = 1
        for i in range(n):
            res[i] = prefix
            prefix *= nums[i]
        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]
        return res

# better approach with time complexity of O(3N) ~= O(N) but with O(1) of space complexity
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product_sum: int = 1
        zero_count: int = 0
        m: int = len(nums)
        for n in nums:
            if n != 0:
                product_sum *= n
            else:
                zero_count += 1
        if zero_count > 1:
            return [0] * m
        if zero_count == 1:
            return [0 if n != 0 else product_sum for n in nums]

        return [product_sum // n for n in nums]