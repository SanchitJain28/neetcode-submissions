class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s: string): string {
        const countStack: number[] = []
        const stringStack: string[] = []
        let current = ""
        let num = 0
        for (let char of s) {
            if (char >= '0' && char <= '9') {
                num = num * 10 + Number(char)
            } else if (char === '[') {
                countStack.push(num)
                stringStack.push(current)
                num = 0
                current = ""
            } else if (char === ']') {
                const repeat = countStack.pop()!
                current = stringStack.pop()! + current.repeat(repeat)
            } else {
                current += char
            }
        }
        return current
    }
}
