/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arrs = [];

  for (let i = 0; i < m; i++) {
    let internal = new Array(n).fill(undefined);
    arrs.push(internal);

    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        arrs[0][0] = 1;
        continue;
      }

      let top = i - 1 < 0 ? 0 : arrs[i - 1][j];
      let left = j - 1 < 0 ? 0 : arrs[i][j - 1];

      arrs[i][j] = top + left;
    }
  }

  return arrs[m - 1][n - 1];
};

console.log(uniquePaths(8, 16));
