function rotateMatrix(matrix) {
  const n = matrix.length;
  const newrotatedMatrix = Array.from({ length: matrix.length }, () =>
    Array(n).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newrotatedMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  return { newrotatedMatrix, matrix };
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateMatrix(arr));
