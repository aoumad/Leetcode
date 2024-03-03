function merge(intervals: number[][]): number[][]
{
    if (intervals.length <= 1)
        return (intervals);

 // a better idea to sort the intervals based on their first number than to pick all the numbers in an array and sort them
    intervals.sort((a, b) => a[0] - b[0]);

// I will assume the first interval is non-overlapping so that it can be initially added
// and then whenever i will process the remaining interval i will check if with the last one added in result
    const res: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++)
    {
        const currInterval = intervals[i];
        const lastMergedInterval = res[res.length - 1];

        // comparing the first number of the current interval with the last number of the last merged interval
        if (currInterval[0] <= lastMergedInterval[1])
        {
            // we need to merge the overlapping intervals
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currInterval[1]);
        }
        else
        {
            // Add non-overlapping interval to the result
            res.push(currInterval);
        }
    }
    return res;
};

const inputInterval = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
];

console.log(merge(inputInterval));