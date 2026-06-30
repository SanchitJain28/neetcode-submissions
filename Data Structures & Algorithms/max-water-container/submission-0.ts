class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length - 1
        let maxArea = 0
        while (left < right) {
            let height = Math.min(heights[left], heights[right])
            let width = right - left
            let area = height * width
            //? get rhe maxArea
            maxArea = Math.max(area, maxArea)
            //if left height is smaller than right height , 
            // move the left one and vice versa
            if (heights[left] < heights[right]) {
                left++
            } else  {
                right--
            }
        }
        return maxArea
    }
}
