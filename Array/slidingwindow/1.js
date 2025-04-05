// Q: Given an array of integers, find the maximum sum of a subarray with a fixed window size.


// Brute Force Approach: O(n^2)
// 1. Iterate through the array with two nested loops.
// 2. For each subarray of size k, calculate the sum.
// 3. Keep track of the maximum sum found.
// 4. Return the maximum sum.

// 5. Time complexity: O(n^2), Space complexity: O(1)
function findMaxBruteForce(arr, k) {
  let max = 0;

  // Iterate through each subarray of size k we need to cut the array length -k so it wont go out of the bounds of the array
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;

    // Calculate sum of current subarray of size k
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    max = Math.max(max, sum);
  }

  return max;
}

// Example Usage
console.log(findMaxBruteForce([2, 1, 5, 1, 3, 2], 3)); // Output: 9

/********** Optimized Approach: Sliding Window Technique: O(n) **********/

// 1. Initialize two pointers (left and right) and a variable to store the sum of the current window.
// 2. Expand the window by moving the right pointer and adding the current element to the sum.
// 3. When the window size exceeds k, subtract the leftmost element from the sum and move the left pointer to the right.
// 4. Keep track of the maximum sum found during this process.
// 5. Return the maximum sum.

// 6. Time complexity: O(n), Space complexity: O(1)

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