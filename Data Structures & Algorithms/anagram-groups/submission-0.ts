class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, number>();
        let result: string[][] = [];
        for (let str of strs) {
            let sortedString = str.split("").sort().join("");
            if (map.has(sortedString)) {
                result[map.get(sortedString)!].push(str);
            } else {
                map.set(sortedString, map.size);
                result.push([str]);
            }
        }
        return result;
    }

}
