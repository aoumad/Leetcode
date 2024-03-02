function rotate(matrix: number[][]): void
{
    const length = matrix.length;
    for (let row = 0; row < length; row++)
    {
        for (let col = 0; col < row; col++)
        {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }

    for (let row = 0; row < length; row++)
    {
        for (let col = 0; col < Math.floor(length / 2); col++)
        {
            [matrix[row][col], matrix[row][length - 1 - col]] = [matrix[row][length - 1 - col], matrix[row][col]];
        }
    }
    // console.log(matrix);
}

// rotate([[1,2,3],[4,5,6],[7,8,9]]);

// time complexity of O(n*2)