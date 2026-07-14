class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result = new Array(temperatures.length).fill(0);
        let stack: number[] = [];
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let popped = stack.pop();
                result[popped] = i - popped
            }
            stack.push(i)
        }
        return result;
    }
}
