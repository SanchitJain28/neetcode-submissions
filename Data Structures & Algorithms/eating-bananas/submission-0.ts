class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1 
        let right = Math.max(...piles)
        while(left <=right){
            let mid = Math.floor((left+right)/2)
            let totalHours = this.getTotalHours(piles , mid)
            if(totalHours <= h){
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }

    private getTotalHours(arr : number[] , mid : number){
        let totalHours = 0 
        for(let i = 0 ; i < arr.length ; i++){
            totalHours += Math.ceil(arr[i] / mid)
        }
        return totalHours
    }
}
