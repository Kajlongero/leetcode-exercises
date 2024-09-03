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

console.log(rDup([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

let k = 1;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1]) {
    nums[k] = nums[i];
    k++;
  }
}

return k;

[0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
[0, 1, 2, 3, 4];
[0, 1, 2, 3, 4];
