class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        if (nums.length <= 1) return nums
        const mid = Math.floor(nums.length / 2)
        const left = this.sortArray(nums.slice(0, mid))
        const right = this.sortArray(nums.slice(mid))
        return this._merge(left, right)
    }

    private _merge(arr1: number[], arr2: number[]): number[] {
        const result: number[] = []
        let i = 0
        let j = 0
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) result.push(arr1[i++])
            else result.push(arr2[j++])
        }
        while (i < arr1.length) result.push(arr1[i++])
        while (j < arr2.length) result.push(arr2[j++])
        return result
    }
}
