class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i]
            if (!numsMap[element]) {
                numsMap[element] = 1
            } else {
                numsMap[element]++
            }
        }

        // [['1', 2], ['2', 5]]
        const numsArrSorted = Object.entries(numsMap).sort((a,b) => b[1] - a[1])
        const result = numsArrSorted.slice(0, k).map(item => item[0])

        return result
    }
}
