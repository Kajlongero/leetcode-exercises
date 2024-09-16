/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

const threeSumClosest = (numbers, target) => {
  let distance = 999999999999,
    num = 999999999999;

  let nums = numbers.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let x = i + 1;
    let y = nums.length - 1;

    while (x < y) {
      const sum = nums[i] + nums[x] + nums[y];
      const close = Math.abs(sum - target);

      if (close < distance) {
        num = sum;
        distance = close;
      }

      if (x + 1 === y) {
        y--;
        x = i + 1;
      } else {
        x++;
      }
    }
  }
  return num;
};
