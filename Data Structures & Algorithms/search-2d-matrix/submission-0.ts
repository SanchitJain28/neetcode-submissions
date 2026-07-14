class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const fArray = matrix.flat();
        let left = 0;
        let right = fArray.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (fArray[mid] < target) {
                left = mid + 1;
            } else if (fArray[mid] > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
