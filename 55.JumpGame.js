/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = (nums) => {
  let jumpsLeft = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > jumpsLeft) jumpsLeft = nums[i];
    if (jumpsLeft >= 0 && i + 1 === nums.length) return true;
    if (nums[i] === 0 && jumpsLeft < 1) return false;
    jumpsLeft--;
  }
};
