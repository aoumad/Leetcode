from typing import List
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        res: List[str] = []
        if (len(digits) == 0):
            return res
        
        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        
        def backtracking(combination: str, nextdigits: str):
            if (len(nextdigits) == 0):
                res.append(combination)
            else:
                currDigit = nextdigits[:1]
                currValues = phone_map[currDigit]
                
                for n in currValues:
                    backtracking(combination + n, nextdigits[1:])
        
        backtracking("", digits)
        return res