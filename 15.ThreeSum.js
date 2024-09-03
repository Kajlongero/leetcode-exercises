const threeSum = (nums) => {
  if (nums.length < 3 && nums.length > 3000) return [];

  nums.sort((a, b) => a - b);

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];

    let j = i + 1;
    let k = nums.length - 1;

    console.log(nums[j], nums[k], target);

    while (j < k) {
      if (nums[j] + nums[k] === target) {
        set.add(JSON.stringify([nums[i], nums[j], nums[k]]));

        j = j + 1;
        k = k - 1;
      }

      if (j + 1 === k) {
        j = j + 1;
        k--;
      } else {
        j++;
      }
    }
  }

  return Array.from(set).map((item) => JSON.parse(item).sort((a, b) => a - b));
};

console.log(threeSum([-2, 0, 1, 1, 2]));
