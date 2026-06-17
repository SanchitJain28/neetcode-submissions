class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], map.get(s[i]) + 1 || 1);
        }

        for (let j = 0; j < t.length; j++) {
            if (map.has(t[j])) {
                let value = map.get(t[j]);
                if (value > 1) map.set(t[j], value - 1);
                else map.delete(t[j]);
            }
        }

        return map.size === 0 ? true : false;
    }
}
