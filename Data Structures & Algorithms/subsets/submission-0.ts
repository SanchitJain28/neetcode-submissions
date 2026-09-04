class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result : number[][] = []
        function backtracking(current : number[] , start : number) {
            result.push([...current])
            for(let i = start ; i < nums.length ; i++){
                current.push(nums[i])
                backtracking(current , i + 1)
                current.pop()
            }
        }
        backtracking([] , 0)
        return result
    }
}
