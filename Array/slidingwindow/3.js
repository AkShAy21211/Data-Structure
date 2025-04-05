// Q.  Problem: Given a binary array, find the longest contiguous subarray containing only 1s after replacing at most k 0s.

/*********brute force approach***********/

// // 1. Iterate through the array with two nested loops.
// // 2. For each subarray, count the number of 0s.
// // 3. If the count exceeds k, break the inner loop and move to the next starting index.
// // 4. Keep track of the maximum length of valid subarrays found.
// // 5. Return the maximum length.

// time and space complexity O(n^2) and O(1) respectively

function longestOnes(arr, k) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let zeroCount = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === 0) zeroCount++;
      if (zeroCount > k) break;
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
}

// /***********optimized approach using sliding window technique**************/

//  1. Use two pointers to represent the window's left and right boundaries.
//  2. Expand the window by moving the right pointer and count the number of 0s.
//  3. If the count exceeds k, shrink the window from the left until the count is ≤ k.
//  4. Keep track of the maximum window size.
//  5. Return the maximum size.

// time and space complexity O(n) and O(1) respectively

function longestOnes(arr, k) {
  let left = 0,
    maxOnes = 0,
    zeroCount = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (arr[left] === 0) zeroCount--;
      left++; // Shrink window
    }

    maxOnes = Math.max(maxOnes, right - left + 1);
  }

  return maxOnes;
}

console.log(longestOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1], 2)); // Output: 6
