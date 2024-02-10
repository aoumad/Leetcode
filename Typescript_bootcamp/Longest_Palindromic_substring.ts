function longestPalindrome(s: string): string
{
    let resLeft = 0;
    let resRight = 0;

    function calcPalindrome(left: number, right: number): void
    {
        while (left >= 0 && right < s.length && s[left] == s[right])
        {
            if (resRight - resLeft < right - left)
            {
                resRight = right;
                resLeft = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++)
    {
        calcPalindrome(i, i); // for the odd case
        calcPalindrome(i, i - 1); // for the sake of the even case
    }
    return s.slice(resLeft, resRight + 1);
};

// console.log(longestPalindrome('bababa'));