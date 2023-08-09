// First Approach
// 1. Reverse the entire array
// 2. Reverse the first k elements
// 3. Reverse the remaining elements
class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n; // in case K is greater than the array given

        reverse(nums, 0, n - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, n - 1);
    }

    private void reverse(int[] nums, int start, int end)
    {
        while (start < end)
        {
            int tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }
    }
    public static void main(String[] args)
    {
        Solution solution = new Solution();

        int[] nums = new int[]{1,2,3,4,5,6,7};
        int k = 5;

        solution.rotate(nums, k);
        System.out.println("Rotate:");
        for (int num: nums)
            System.out.print(num + " ");
        System.out.println();
    }

}
