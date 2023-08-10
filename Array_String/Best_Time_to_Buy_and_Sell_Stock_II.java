class Solution
{
    public int maxProfit(int[] prices)
    {
        int min_price = prices[0];
        int max_profit = 0;

        for (int i = 1; i < prices.length; i++)
        {
            if (prices[i] < min_price)
                min_price = prices[i];
            else
            {
                if (prices[i] > min_price)
                {
                    max_profit += prices[i] - min_price;
                    min_price = prices[i];
                }
            }
        }
        return (max_profit);
    }

    public static void main(String[] args)
    {
        Solution solution = new Solution();
        int rtn_profit;

        int[] prices = new int[]{7,6,4,3,1};
        rtn_profit = solution.maxProfit(prices);

        System.out.println("Profit earned: " + rtn_profit);
    }
};