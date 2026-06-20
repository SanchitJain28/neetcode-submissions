class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i])! + 1);
            } else {
                map.set(nums[i], 1);
            }
        }
        const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            result.push(sortedArray[i][0]);
        }
        return result;
    }
}
