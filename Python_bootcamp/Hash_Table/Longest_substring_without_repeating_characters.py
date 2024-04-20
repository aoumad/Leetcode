class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        n = len(s)
        max_length = 0
        start = 0
        
        for end, val in enumerate(s):
            while val in charSet:
                charSet.remove(s[start])
                start+= 1
            charSet.add(val)
            max_length = max(max_length, end - start + 1)
        return max_length

if __name__ == "__main__":
    solution = Solution()
    print(solution.lengthOfLongestSubstring("pwwkew"))