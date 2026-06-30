class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let i = 0
        let j = 0
        const set = new Set()
        let longestStrLen = 0
        while (j < s.length) {
            while (set.has(s[j])) {
                set.delete(s[i])
                i++
            }
            set.add(s[j])
            j++
            longestStrLen = Math.max(longestStrLen, j - i)
        }
        return longestStrLen
    }
}
