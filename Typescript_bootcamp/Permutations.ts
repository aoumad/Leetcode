function permute(nums: number[]): number[][] {
    const result : number[][] = [];

    function backtrack(current: number[])
    {
        if (current.length === nums.length)
        {
            result.push([...current]);
            return ;
        }

        for (let i = 0; i < nums.length; i++)
        {
            if (current.includes(nums[i]))
                continue;

            current.push(nums[i]);
            backtrack(current);
            current.pop();
        }
    }

    backtrack([]);
    return (result);
};

console.log(permute([1,2,3]));