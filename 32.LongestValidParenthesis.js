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

  clear() {
    this.count = 0;
    this.stack = {};

    return this.stack;
  }
}

const LongestValidParentheses = (str) => {
  if (str.length <= 1) return 0;
  if (str.length === 2 && str[0] !== "(" && str[1] !== ")") return 0;

  let higher = 0;

  const stack = new Stack();
  const arrpos = new Array(str.length).fill(0);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push({ element: "(", index: i });
    if (str[i] === ")") {
      const top = stack.peek();

      if (top?.element === "(") {
        stack.pop();
        arrpos[i] = 1;
        arrpos[top.index] = 1;

        continue;
      }
    }
  }
  const converted = arrpos.join("").split("0");

  converted.map((el) => {
    if (el.length > higher) higher = el.length;
  });
  return higher;
};

console.log(LongestValidParentheses("()()(()()"));
