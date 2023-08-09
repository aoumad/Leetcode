class Solution
{
    public int  removeDuplicates(int[] nums)
    {
        int len = nums.length;
        if (len == 0 || len == 1)
            return (len);
        int j = 0;
        for (int i = 0; i < len - 1; i++)
        {
            if (nums[i] != nums[i + 1])
                nums[j++] = nums[i];
        }
        nums[j++] = nums[len - 1];
        return (j);
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();

        int[] nums = new int[]{0,0,1,1,1,2,2,3,3,4};
        int k = solution.removeDuplicates(nums);

        System.out.println("Remove duplicates:");
        for (int num: nums)
        {
            System.out.print(num + " ");
        }
        System.out.println("\n" + k);
    }
};
