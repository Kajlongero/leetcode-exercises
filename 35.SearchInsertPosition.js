/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return left;
};

console.log(searchInsert([1, 2, 3, 5, 6, 8, 9, 10], 7));
