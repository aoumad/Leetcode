function permuteUnique(nums: number[]): number[][] {
    const result : number[][] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    nums.sort((a, b) => a - b);

    function backtrack(current: number[])
    {
        if (nums.length === current.length)
        {
            result.push([...current]);
            return ;
        }

        for (let i = 0; i < nums.length; i++)
        {
            if (used[i] === true || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
                continue;

            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return (result);
}