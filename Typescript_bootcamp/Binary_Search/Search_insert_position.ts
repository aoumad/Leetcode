function searchInsert(nums: number[], target: number): number {
    var mid: number = 0;
    var l = 0;
    var r = nums.length - 1;

    while (l <= r)
    {
        mid = l + Math.floor((r - l) / 2); // this calculation basically do nothing different than (l + r)/2, it just avoid the overflow of integers if the l and r are large

        if (nums[mid] === target)
            return mid;
        else if (nums[mid] > target)
            r = mid - 1;
        else
            l = mid + 1;
    }

    return (l);
};

console.log(searchInsert([1,3,5,6], 5));