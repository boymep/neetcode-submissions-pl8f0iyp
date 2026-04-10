class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const symbolsMap = {}

        for (let i = 0; i < nums.length; i++) {
            if (symbolsMap[nums[i]]) return true;
            else symbolsMap[nums[i]] = true
        }

        return false
    }
}
