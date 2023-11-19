class longest_common_prefix
{
    public String longestCommonPrefix(String[] strs)
    {
        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++)
        {
            while (strs[i].indexOf(prefix) != 0)
            {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty())
                    return "";
            }
        }
        return prefix;
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();

        String[] strs1 = {"flower", "flow", "flight"};
        System.out.println("Test case 1: " + solution.longestCommonPrefix(strs1));
    }
}