function minPathSum(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;
    let dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = grid[0][0];
    // fill the first col and row for optimization (fik fik lahoma dirha to avoid overlapping calculation in the for loop because it moves either to right or bottom)
    for (let i = 1; i < n; i++)
        dp[0][i] = dp[0][i -1] + grid[0][i];
    for (let i = 1; i < m; i++)
        dp[i][0] = dp[i - 1][0] + grid[i][0];

    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++)
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);

    return (dp[m- 1][n - 1]);
};

const grid: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(minPathSum(grid));