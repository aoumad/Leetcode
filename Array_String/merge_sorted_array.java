public class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int last = m + n - 1;
        if (m == 0)
        {
            for (int z = 0; z < n;z++)
                nums1[z] = nums2[z];
        }
        while (i >= 0 && j >= 0)
        {
            if (nums1[i] > nums2[j])
            {
                nums1[last] = nums1[i];
                i--;
            }
            else
            {
                nums1[last] = nums2[j];
                j--;
            }
            last--;
        }

        while (j >= 0)
        {
            nums1[last] = nums2[j];
            j--;
            last--;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1
        int[] nums1 = new int[]{4, 5, 6, 0, 0, 0};
        int[] nums2 = new int[]{1, 2, 3};
        int m = 3;
        int n = 3;
        solution.merge(nums1, m, nums2, n);

        System.out.println("Merged Array:");
        for (int num : nums1) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test case 2
        int[] nums3 = new int[]{2, 0};
        int[] nums4 = new int[]{1};
        int m2 = 1;
        int n2 = 1;
        solution.merge(nums3, m2, nums4, n2);

        System.out.println("Merged Array:");
        for (int num : nums3) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}



