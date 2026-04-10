class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let profit = 0

        while (right < prices.length) {
            if (prices[right] - prices[left] < 0) {
                left = right 
                right++
            }
            else if (prices[right] - prices[left] > profit) {
                profit = prices[right] - prices[left]
                right++
            } else right++
        }

        return profit
    }
}
