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

  console.table(matrix);

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === j) break;

      let actual = matrix[i][n - j - 1];

      matrix[i][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = actual;
    }
  }
  console.table([
    [21, 16, 11, 6, 1],
    [22, 17, 14, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 12, 9, 4],
    [25, 20, 15, 10, 5],
  ]);
  console.table(matrix);
};

rotateImage([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

[
  [21, 16, 11, 6, 1],
  [22, 17, 14, 7, 2],
  [23, 18, 13, 8, 3],
  [24, 19, 12, 9, 4],
  [25, 20, 15, 10, 5],
];
