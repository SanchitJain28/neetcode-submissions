class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if (k <= 0) return false
        const set = new Set<number>()
        let left = 0
        for (let right = 0; right < nums.length; right++) {
            if (right - left > k) {
                set.delete(nums[left])
                left++
            }
            if (set.has(nums[right])) return true
            set.add(nums[right])
        }
        return false
    }
}
