/**
 * @param {number} n
 * @return {number}
 */

// after seeing this problem is very similar to fibonacci, well it's the same

const climbingStairs = (n) => {
  let fib = [0, 1];

  for (let i = 0; i < n; i++) {
    let sum = fib[0] + fib[1];

    fib[0] = fib[1];
    fib[1] = sum;
  }

  return fib[1];
};

console.log(climbingStairs(4));
