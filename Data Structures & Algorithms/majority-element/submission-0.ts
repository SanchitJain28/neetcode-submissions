class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const map = new Map<number, number>()
        for (let num of nums) map.set(num, (map.get(num) ?? 0) + 1)
        const array: [number, number][] = []
        for (let [val, freq] of map) array.push([val, freq])
        return array.sort((a, b) => b[1] - a[1])[0][0]
    }
}
