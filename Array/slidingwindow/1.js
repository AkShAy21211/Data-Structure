// Q: Given an array of integers, find the maximum sum of a subarray with a fixed window size.

function findMax(arr, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}

// Test cases:
console.log(findMax([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(findMax([-2, -3, 4, -1, -2, 1, 5, -3], 3)); // Output: 4