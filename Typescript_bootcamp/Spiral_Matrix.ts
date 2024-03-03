function spiralOrder(matrix: number[][]): number[]
{
    const res: number[] = [];

    if (!matrix || matrix.length === 0 || matrix[0].length === 0)
        return (res);

    // I will basically use 4 pointers to track and mimic the spiral order of the matrix
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right)
    {
        // 1- traverse top row
        for (let i = left; i <= right; i++)
            res.push(matrix[top][i]);
        top++;

        // 2- Traverse right column
        for (let i = top; i <= bottom; i++)
            res.push(matrix[i][right]);
        right--;
        // Traverse bottom now
        if (top <= bottom)
        {
            for (let i = right; i >= left; i--)
                res.push(matrix[bottom][i]);
            bottom--;
        }

        // Traverse left column
        if (left <= right)
        {
            for (let i = bottom; i >= top; i--)
                res.push(matrix[i][left]);
            left++;
        }
    }

    return res;
}

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(spiralOrder(matrix));