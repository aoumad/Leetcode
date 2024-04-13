from typing import List

# Brute force solution that sort the array of numbers to check each time nums[i] with nums[ i + 1]
# it takes a time complexity of O(NLOGN) for sorting the traversing and space of O(1)
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        rtn_flag: bool = False
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                rtn_flag = True
                break
        return rtn_flag

# USING HashSet as an optimal solution, it will take worst case of O(N) of time complexity and O(N) in space...

class Solution(object):
    def containsDuplicate(self, nums: List[int]) -> bool:
        HashSet = set()
        for n in nums:
            if n in HashSet:
                return True
            HashSet.add(n)
        return False

if __name__ == "__main__":
    solution = Solution()
    nums = [1,2,3,4]
    print(solution.containsDuplicate(nums))