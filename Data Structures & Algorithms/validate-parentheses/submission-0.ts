class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" }
        let stack = []
        for(let ch of s){
            if(!pairs[ch]){
                stack.push(ch)
            }else {
                if(stack.pop() !== pairs[ch]) return false
            }
        }
        return stack.length === 0 
    }
}
