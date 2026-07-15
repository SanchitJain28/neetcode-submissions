class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let minElementIndex = -1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) left = mid + 1;
            else right = mid;
        }
        minElementIndex = left;
        if (target >= nums[minElementIndex] && target <= nums[nums.length - 1]) {
            left = minElementIndex;
            right = nums.length - 1;
        } else {
            left = 0;
            right = minElementIndex - 1;
        }
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) left = mid + 1;
            else if (nums[mid] > target) right = mid - 1;
            else return mid;
        }
        return -1;
    }
}
