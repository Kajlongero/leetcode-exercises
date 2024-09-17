/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let solutions = {};

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");

    if (!solutions[sorted]) {
      solutions[sorted] = [strs[i]];
    } else {
      solutions[sorted] = [...solutions[sorted], strs[i]];
    }
  }

  return Object.values(solutions);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
