function groupAnagrams(strs: string[]): string[][]
{
    let cache: Record<string, string[]> = {};

    strs.forEach((str) => {
        const sortedString = str.split('').sort().join('');
        cache[sortedString] = cache[sortedString] ?? [];
        cache[sortedString].push(str);
    })

    return Object.values(cache);
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));