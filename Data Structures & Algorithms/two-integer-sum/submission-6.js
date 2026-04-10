class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0
        let right = nums.length - 1
        const values = [...nums].map((item, index) => {
            return {
                val: item,
                idx: index
            }
        }).sort((a, b) => a.val - b.val)

        while (left < right) {
            if (values[left].val + values[right].val === target) return [values[left].idx, values[right].idx]
            else if (values[left].val + values[right].val > target) {
                right--
            } else {
                left++
            }
        }

    }
}
