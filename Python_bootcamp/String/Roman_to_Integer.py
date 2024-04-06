class Solution:
    def romanToInt(self, s: str) -> int:
        rtn: int = 0
        map = {} # Declare a dictionary to serve as a hash map
                # fill it with key values pairs
        map['I'] = 1
        map['V'] = 5
        map['X'] = 10
        map['L'] = 50
        map['C'] = 100
        map['D'] = 500
        map['M'] = 1000

        for i in range(len(s)):
            if (i + 1 < len(s) and map[s[i]] < map[s[i + 1]]):
                rtn -= map[s[i]]
            else:
                rtn += map[s[i]]
        return rtn

if __name__ == "__main__":
    solution = Solution()
    s = "CM"
    print(solution.romanToInt(s))