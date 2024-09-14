/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
  const numbers = nums.sort((a, b) => a - b);

  let solutions = {};

  for (let i = 0; i < numbers.length; i++) {
    let target = -numbers[i];

    let j = i + 1;
    let k = numbers.length - 1;

    let numI = numbers[i];

    if (numI === numbers[i - 1] && numbers[j] === numbers[j + 1]) continue;

    while (j < k) {
      let numJ = numbers[j];
      let numK = numbers[k];

      if (numJ + numK === target) {
        solutions[`${numI}${numJ}${numK}`] = [numI, numJ, numK];
      }
      if (numJ + numK > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return Object.values(solutions);
};

console.log(threeSum([0, 0, 0, 0]));
