import java.util.*;

public class Solution
{
    public String reverseWords(String s)
    {
        String[] words = s.trim().split(" ");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--)
        {
            words[i] = words[i].trim();
            if (words[i].equals(""))
                continue;
            sb.append(words[i]).append(" ");
        }
        return (sb.toString().trim());
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();

        String s1 = "a good   example";
        System.out.println("Test case 1:" + solution.reverseWords(s1));
    }
}
