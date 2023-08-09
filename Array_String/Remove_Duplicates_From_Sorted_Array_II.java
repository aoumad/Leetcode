class Solution {
    public int removeDuplicates(int[] nums)
    {
        int len = nums.length;
        if (len <= 2)
            return (len);
        int prev = 1;
        int curr = 2;
        for (int i = curr; i < len; i++)
        {
            if (nums[curr] == nums[prev] && nums[curr] == nums[prev - 1])
                curr++;
            else
                nums[++prev] = nums[curr++];
        }
        return (prev + 1);
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();

        int[] nums = new int[]{0,0,1,1,1,1,2,3,3};
        int k = solution.removeDuplicates(nums);

        System.out.println("Remove duplicates after appearing more than twice: ");
        for (int num: nums)
            System.out.print(num + " ");
        System.out.println("\n" + k);
    }
};