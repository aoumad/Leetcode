from typing import List
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        
        for s in strs:
            sorted_s = ''.join(sorted(s))
            groups[sorted_s].append(s)
            
        return list(groups.values())
    
strs: List[str] = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(Solution.groupAnagrams(strs))