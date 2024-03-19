function convert(s: string, numRows: number): string {

    if (numRows === 1)
        return s;
    const ret: string[][] = new Array(numRows).fill('').map(() => []);
    let res : string = '';
    let direction = 1; // 1 for downward, -1 for upward
    let rowIndex = 0;

    for (let i = 0; i < s.length; i++)
    {
        ret[rowIndex].push(s[i]);
        
        if (rowIndex === 0)
            direction = 1;
        else if (rowIndex === numRows - 1)
            direction= -1;

            rowIndex += direction;
    }
    for (let i = 0; i < numRows; i++)
    {
        console.log(ret[i]);
        res += ret[i].join('');
    }
    return (res);
};

// console.log(convert('PAYPALISHIRING', 3));