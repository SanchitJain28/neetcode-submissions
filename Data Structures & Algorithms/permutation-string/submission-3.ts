class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let left = 0
        let right = 0
        const freq = new Map<string, number>();
        const k = s1.length
        let matches = 0
        //set the freq from which we have to compare
        for (let i = 0; i < s1.length; i++) {
            const ch = s1[i]
            freq.set(ch, (freq.get(ch)! || 0) + 1)
        }

        while (right < s2.length) {
            const ch = s2[right];
            if (freq.has(ch)) {
                freq.set(ch, freq.get(ch)! - 1)
                if (freq.get(ch) === 0) matches++
            }
            //shrink the window
            while (right - left + 1 > k) {
                const leftCh = s2[left]
                if (freq.has(leftCh)) {
                    if (freq.get(leftCh) === 0) matches--
                    freq.set(leftCh, freq.get(leftCh)! + 1)
                }
                left++
            }

            if (matches === freq.size) return true
            right++
        }
        return false
    }
}
