class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let m = matrix.length;
        let n = matrix[0].length;
        let left = 0; 
        let right = m * n - 1; 
        while (left <= right) {
            let mid = Math.floor((left + right) / 2); 
            let row = Math.floor(mid / n); 
            let column = mid % n;
            if (matrix[row][column] < target) {
                left = mid + 1;
            } else if (matrix[row][column] > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
