function findMaxMin(arr) {
  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return {
    max,
    min,
  };
}

console.log(findMaxMin([1, 2, -3, 4, 5, 6, 7, 8, 9, 10]));

// Time complexity: O(n), Space complexity: O(1)
