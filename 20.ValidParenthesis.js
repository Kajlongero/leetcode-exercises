class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }

  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }

  peek() {
    return this.stack[this.count - 1];
  }
}

const ValidParenthesis = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(": {
        stack.push(s[i]);
        break;
      }
      case "[": {
        stack.push(s[i]);
        break;
      }
      case "{": {
        stack.push(s[i]);
        break;
      }

      case ")": {
        const previous = stack.peek();
        stack.push(s[i]);
        if (previous === "(") {
          stack.pop();
          stack.pop();
        }
        break;
      }
      case "]": {
        const previous = stack.peek();
        stack.push(s[i]);
        if (previous === "[") {
          stack.pop();
          stack.pop();
        }
        break;
      }
      case "}": {
        const previous = stack.peek();
        stack.push(s[i]);
        if (previous === "{") {
          stack.pop();
          stack.pop();
        }
        break;
      }
    }
  }

  return stack.size() >= 1 ? false : true;
};

console.log(ValidParenthesis("([])"));
