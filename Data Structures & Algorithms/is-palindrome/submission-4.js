class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/
        const parsed = s.toLowerCase().split('').filter(letter => regex.test(letter))
        
        let left = 0
        let right = parsed.length - 1

        while (left <= right) {
            if (parsed[left] === parsed[right]) {
                left++
                right--
            } else {
                return false
            }
        }

        return true
    }
}