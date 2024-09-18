/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotateImage = (matrix) => {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let actual = matrix[i][j];

      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = actual;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === j) break;

      let actual = matrix[i][n - j - 1];

      matrix[i][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = actual;
    }
  }
};
