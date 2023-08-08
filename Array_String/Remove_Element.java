class Solution
{
    public int removeElement(int[] nums, int val)
    {
        int cnt = 0;
        int i = 0;
        int k = nums.length;
        while (i < nums.length)
        {
            if (nums[i] == val)
            {
                cnt++;
                k--;
            }

            else if (nums[i] != val && cnt > 0)
            {
                nums[i - cnt] = nums[i];
            }
            i++;
        }
        return (k);
    }
    public static void main(String[] args)
    {
        Solution solution = new Solution();
        int rtn;

        // Test case 1
        int[] nums = new int[]{3,2,2,3};
        int val = 2;

        rtn = solution.removeElement(nums, val);
        System.out.println("Removed Element:");
        for (int num: nums)
            System.out.print(num + " ");
        System.out.println();
        System.out.println(rtn);
        System.out.println();

        // Test case 2
        int[] nums2 = new int[]{0,1,2,2,3,0,4,2};
        val = 2;

        rtn = solution.removeElement(nums2, val);
        System.out.println("Removed Element:");
        for (int num: nums2)
            System.out.print(num + " ");
        System.out.println();
        System.out.println(rtn);
        System.out.println();
    }

};