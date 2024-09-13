/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * [2,2,5,5,5,5,5,5,5,7,7]
 */

const searchRange = (nums, target) => {
  let right = nums.length - 1,
    left = 0;

  let tleft, tright;

  const findRight = (mid) => {
    let val = mid;
    while (nums[val + 1] === target) {
      val++;
    }
    return val;
  };

  const findLeft = (mid) => {
    let val = mid;
    while (nums[val - 1] === target) {
      val--;
    }
    return val;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      tright = findRight(mid);
      tleft = findLeft(mid);
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [tleft ?? -1, tright ?? -1];
};

console.log(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
