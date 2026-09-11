class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let left = 0
        let right = 0
        let minLen = 999999999
        let sum = 0
        while (right < nums.length) {
            sum += nums[right]
            while (sum >= target) {
                minLen = Math.min(right - left + 1, minLen)
                sum -= nums[left]
                left++
            }
            right++
        }
        return minLen === 999999999 ? 0 : minLen
    };
}
