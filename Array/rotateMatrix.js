function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotateMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotateMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  return rotateMatrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(matrix));
