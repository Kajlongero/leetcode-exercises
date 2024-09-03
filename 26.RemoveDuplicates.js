const rDup = (nums) => {
  let dup = 0;
  let last = null;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (last !== nums[i]) {
      set.add(nums[i]);

      last = nums[i];
      continue;
    }
    dup += 1;
  }

  return set.size;
};
