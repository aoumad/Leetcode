function climbStairs(n: number): number {
    let dp: number[] = [];

    function climb(n: number): number {
        if (n <= 0) return 0;
        if (n === 1 || n === 2) return n;

        if (dp[n]) return dp[n];

        dp[n] = climb(n - 1) + climb(n - 2);
        return dp[n];
    }

    return climb(n);
}

// code that beats 99.93% of typescript users