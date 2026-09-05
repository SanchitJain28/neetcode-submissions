class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        const stack: string[] = [];
        for (let part of path.split("/")) {
            if (part === "" || part === ".") continue;
            if (part === "..") {
                if (stack.length) stack.pop();
            } else {
                stack.push(part);
            }
        }
        return "/" + stack.join("/");
    }
}
