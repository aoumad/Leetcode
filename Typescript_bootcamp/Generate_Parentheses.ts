function generateParenthesis(n: number): string[] {
    if (n === 0)
        return [];

    const dp: string[][] = new Array(n + 1).fill(null).map(() => []);

    dp[0].push('');
    for (let i = 1; i <= n; i++)
    {
        for (let j = 0; j < i; j++)
        {
            for (const left of dp[j])
            {
                for (const right of dp[i - 1 - j])
                {
                    dp[i].push(`(${left}${right})`);
                }

            }
        }
    }
    return dp[n];
};


console.log(generateParenthesis(4));