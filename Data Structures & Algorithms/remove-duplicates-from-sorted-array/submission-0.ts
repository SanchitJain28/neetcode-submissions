class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let j = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[j]) {
                j++
                nums[j] = nums[i]
            }
        }
        return j + 1
    }
}
