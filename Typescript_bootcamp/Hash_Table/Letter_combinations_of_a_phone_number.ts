function letterCombinations(digits: string): string[]
{
    const res: string[] = [];
    if (digits.length === 0)
        return res;

        // to define an object i can either declare an object or a map
    const phoneMAp: { [digit: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // I think using the algo of backtracking is so useful, and having this DFS approach for traversing
    // Time complexity of O(n)
    function DFS(combination: string, nextDigits: string)
    {
        // base case of n = 0
        if (nextDigits.length === 0)
            res.push(combination); // here all possible letters are already in the combination string so we need to push it and process other combinations recursively
        else
        {
            const currDigit = nextDigits.substring(0, 1);
            const letters = phoneMAp[currDigit];
            for (let i = 0; i < letters.length; i++)
            {
                const currLetter = phoneMAp[currDigit].substring(i, i + 1);
                DFS(combination + currLetter, nextDigits.substring(1));
            }
        }
    };

    DFS("", digits);
    return res;
};

// console.log(letterCombinations("23"));