class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        //we will sort the array first
        nums.sort((a, b) => a - b)
        let n = nums.length
        //initiate the result variable
        let result: number[][] = []
        let target = 0
        //we are fixing one number 
        for (let i = 0; i < n - 1; i++) {
            //we have to avoid duplicates here
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1
            let k = n - 1
            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k]
                if (sum < target) j++
                else if (sum > target) k--
                else {
                    result.push([nums[i], nums[j], nums[k]])
                    j++
                    k--
                    //we have to avoid duplocates here 
                    while (j < k && nums[j] === nums[j - 1]) j++
                    while (j< k && nums[k] === nums[k + 1]) k--
                }
            }
        }
        return result
    }
}
