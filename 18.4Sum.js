const fourSome = (numbers, target) => {
  if (numbers.length < 4) return [];

  const nums = numbers.sort((a, b) => a - b);

  let solutions = {};

  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    while (i < j) {
      let x = i + 1;
      let y = j - 1;
      while (x < y) {
        const sum = nums[i] + nums[x] + nums[y] + nums[j];

        if (sum === target) {
          solutions[`${nums[i]}${nums[x]}${nums[y]}${nums[j]}`] = [
            nums[i],
            nums[x],
            nums[y],
            nums[j],
          ];
        }

        if (sum > target) {
          y--;
        } else {
          x++;
        }
      }
      j--;
    }
    i++;
    j = nums.length - 1;
  }

  return Object.values(solutions);
};

console.log(
  fourSome([1000000000, 1000000000, 1000000000, 1000000000], -294967296)
);
