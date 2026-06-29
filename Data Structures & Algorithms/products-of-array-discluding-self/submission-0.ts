class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let n = nums.length;
        let result = new Array(n).fill(1);
        let prefix = 1;
        for (let i = 0; i < n - 1; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        result[n - 1] = prefix;
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        console.log("FINAL", result)
        return result;
    }
}
