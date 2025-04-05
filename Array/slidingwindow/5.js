// Q. Problem: Find the smallest contiguous subarray whose sum is at least k.

/*********brute force approach***********/
// 1. Iterate through all possible subarrays and calculate their sums.
// 2. Keep track of the minimum length of subarrays whose sum is at least k.
// 3. Return the minimum length found, or 0 if no such subarray exists.

// Time complexity is O(n^3) where n is the length of the array.

// why O(n^3)



function minSubarrayLen(k, arr) {
  let minLength = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum >= k) {
        minLength = Math.min(minLength, j - i + 1);
        break; // No need to check further for this starting index
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

/*********optimized approach***********/


// 1. Approach: Sliding Window
// 2. Expand the window by adding elements until sum >= k.
// 3. Shrink window from the left while sum remains >= k.
// 4. Track the minimum window size.

// Time complexity is O(n) where n is the length of the array.

function minSubarrayLen(k, arr) {
  let left = 0,
    sum = 0,
    minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= k) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4,3])
