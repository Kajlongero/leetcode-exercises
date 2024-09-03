/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = nums.length;

  for (let i = 0; i < nums.length; i++) {
    while (nums[k - 1] === val) {
      nums[k - 1] = "_";
      k--;
    }
    if (nums[i] === val) {
      nums[i] = nums[k - 1];
      nums[k - 1] = "_";
      k--;
    }
  }

  return k;
};

const first = removeElement([3, 3, 3, 3, 3, 3], 3);
const second = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log(first);
console.log(second);
