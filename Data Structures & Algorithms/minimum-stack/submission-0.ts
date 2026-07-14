class MinStack {
  private minStack = [];
  private stack = [];

  push(val: number): void {
    //First , Just push into normal stack
    this.stack.push(val);
    // Get the current minimum
    const currentMin =
      this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
