class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = []
        for (let operation of operations) {
            if (operation === "C") {
                stack.pop()
            }
            else if (operation === "D") {
                const value = stack[stack.length - 1] * 2
                stack.push(value)
            }
            else if (operation === "+") {
                const value = stack[stack.length - 1] + stack[stack.length - 2]
                stack.push(value)
            }
            else {
                const value = Number(operation)
                stack.push(value)
            }
        }
        let total = 0
        for (let num of stack) total += num
        return total
    };
}
