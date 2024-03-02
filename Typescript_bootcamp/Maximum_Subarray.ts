function maxSubArray(nums: number[]): number
{
    let res = - Infinity;
    let curr = -Infinity;

    for (let num of nums)
    {
        curr < 0 ? curr = num : curr+= num;
        res = Math.max(res, curr);
    }
    return (res);
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// [-2,1,-3,4,-1,2,1,-5,4]