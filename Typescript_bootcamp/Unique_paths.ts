// This first try sadly ended up with Time Limit Exceeded

// function uniquePaths(m: number, n: number): number {
//     let visited: number[][] = new Array(n).fill(0).map(() => new Array(m).fill(0));
//     let ret: number = 0;
//     function DFS(j: number, i: number)
//     {
//         if (i >= n || j >= m || visited[i][j] === 1)
//             return;

//         visited[i][j] = 1;
//         if (i === n - 1 && j === m - 1)
//         {
//             ret++;
//             visited[i][j] = 0;
//             return;
//         }
//         DFS(j + 1, i);
//         DFS(j, i  +1);

//         visited[i][j] = 0;
//     }


//     DFS(0, 0);
//     return ret;
// };


// Let's try Dp as second approach

function uniquePaths(m: number, n: number): number {

    const dp: number[][] = new Array(n).fill(0).map(() => new Array(m).fill(0));

    // Base case: There is always one way to reach any cell in the first row or column
    for (let i = 0; i < m; i++)
        dp[0][i] = 1;
    for (let j = 0; j < n; j++)
        dp[j][0] = 1;

    for (let i = 1; i < n; i++)
        for (let j = 1; j < m; j++)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

    return (dp[n - 1][m - 1]);

}

// console.log(uniquePaths(3, 7));