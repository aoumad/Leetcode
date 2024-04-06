class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create a dictionary to store the index of each number
        num_dict = {}

        for i, num in enumerate(nums):
            remainder = target - num

            if remainder in num_dict:
                return [num_dict[remainder], i]
            else:
                num_dict[num] = i
        return [] # if no solution found, return an empty list

if __name__ == "__main__":
    solution = Solution()
    nums = [2,7,11,15]
    target = 9
    print(solution.twoSum(nums, target))