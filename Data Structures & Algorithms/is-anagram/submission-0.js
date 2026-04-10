class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('')
    }
}
