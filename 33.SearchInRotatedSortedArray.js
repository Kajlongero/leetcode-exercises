/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 *
 * [0,1,2,3,4,5,6,7,8,9]
 * [4,5,6,7,8,9,0,1,2,3]
 *
 *
 */

const searchRotated = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (nums[middle] === target) return middle;
    if (nums[right] === target) return right;
    if (nums[left] === target) return left;

    if (nums[middle] < nums[left] && nums[left] < target) {
      right = middle - 1;
      continue;
    } else if (nums[middle] > nums[right] && nums[right] > target) {
      left = middle + 1;
      continue;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = right - 1;
    }
  }

  return -1;
};

console.log(searchRotated([8, 1, 2, 3, 4, 5, 6, 7], 6));
