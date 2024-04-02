function mySqrt(x: number): number {
    if (x === 0 || x === 1)
        return x;

    var left = 1;
    var right = Math.floor(x / 2);
    // generally the square will be in the range of [1, Math.floor(x / 2)]

    while (left <= right)
    {
        const mid = Math.floor(left + (right - left) / 2);
        const square = mid * mid; // square = the number multiplied by itself in most of the cases

        if (square === x)
            return mid;
        else if (square > x)
            right = mid - 1;
        else
            left = mid + 1;
    }

    return right;
};

console.log(mySqrt(8));