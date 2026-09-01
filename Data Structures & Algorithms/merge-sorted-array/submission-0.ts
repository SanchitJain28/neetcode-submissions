class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let n1 = 0
        let n2 = 0
        const result = new Array(m + n).fill(-1)
        for (let pos = 0; pos < m + n; pos++) {
            if (n1 >= m) result[pos] = nums2[n2++]
            else if (n2 >= n) result[pos] = nums1[n1++]
            else if (nums1[n1] < nums2[n2]) result[pos] = nums1[n1++]
            else result[pos] = nums2[n2++]
        }
        for (let i = 0; i < result.length; i++) nums1[i] = result[i]
    }
}
