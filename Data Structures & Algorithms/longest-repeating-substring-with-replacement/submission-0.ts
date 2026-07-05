class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0
        let right = 0
        let maxFreq = 0
        let longestSub = 0
        const freq = new Map<string, number>();

        while (right < s.length) {
            const ch = s[right];
            freq.set(ch, (freq.get(ch)! || 0) + 1)
            maxFreq = Math.max(maxFreq, freq.get(ch)!);
            while (right - left + 1 - maxFreq > k) {
                const leftCh = s[left]
                freq.set(leftCh, freq.get(leftCh)! - 1)
                left++
            }
            longestSub = Math.max(longestSub, right - left + 1)
            right++
        }
        return longestSub
    }
}
