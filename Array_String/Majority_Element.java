// Boyer-Moore Voting Algorithm ( can't use hash tables since they want us to stick with O(1) space

class Solution
{
    public int majorityElement(int[] nums)
    {
        int candidate = 0;
        int count = 0;

        for (int num: nums)
        {
            if (count == 0)
            {
                candidate = num;
                count++;
            }
            else if (candidate == num)
                count++;
            else
                count--;
        }
        return (candidate);
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();
        int rtn;

        int[] nums = new int[]{2,2,1,1,1,2,2};

        rtn = solution.majorityElement(nums);
        System.out.println("Testing this new algo:");
        System.out.println(rtn);
    }

}
