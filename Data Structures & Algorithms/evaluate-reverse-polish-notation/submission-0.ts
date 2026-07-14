class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens: string[]): number {
    let SN = [];
    let result = 0;
    for (let token of tokens) {
      if (!Number.isNaN(Number(token))) {
        SN.push(Number(token));
      } else {
        let a = SN.pop()!;
        let b = SN.pop()!;
        if (token === "+") result = b + a;
        else if (token === "-") result = b - a;
        else if (token === "*") result = b * a;
        else result = Math.trunc(b / a);
        SN.push(result);
      }
    }
    return SN.pop()!;
  }
}
