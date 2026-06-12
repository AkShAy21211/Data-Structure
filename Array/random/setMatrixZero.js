function setZeroes(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        transformRow(matrix, i);
        transformCol(matrix, j);
      }
    }

  }
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

function transformRow(matrix, row) {
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[row][i] !== 0) {
      matrix[row][i] = -1;
    }
  }
}

function transformCol(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] !== 0) {
      matrix[i][col] = -1;
    }
  }
}

// Time: O(m*n) where m is the number of rows and n is the number of columns
// Space: O(1)
// This solution uses the first row and first column as markers for whether a row or column should be set to zero.
// It first iterates through the matrix and sets the first row and first column to zero if any element in that row or column is zero.
// Then it iterates through the matrix again and sets any element to zero if it is marked as -1 in the first row or first column.
// Finally, it sets the first row and first column to zero if they were originally marked as zero.

//test
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setZeroes(matrix)); // [[1,0,1],[0,0,0],[1,0,1]]


// Better solution

function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let firstRowZero = matrix[0].includes(0);
    let firstColZero = matrix.some(row => row[0] === 0);
  
    // Step 1: Use first row/col as markers
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Step 2: Set cells to zero based on markers
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Step 3: First row/col to 0 if needed
    if (firstRowZero) matrix[0].fill(0);
    if (firstColZero) {
      for (let i = 0; i < rows; i++) matrix[i][0] = 0;
    }
  
    return matrix;
  }
  