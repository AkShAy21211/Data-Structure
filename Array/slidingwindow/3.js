// Q.  Problem: Given a binary array, find the longest contiguous subarray containing only 1s after replacing at most k 0s.

// 1. Approach: Sliding Window

// 2. Expand the window, count the number of 0s.

// 3. If zeros exceed k, shrink the window from the left.

// 4. Track the maximum window size.


function longestOnes(arr, k) {
    let left = 0, maxOnes = 0, zeroCount = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) zeroCount++;

        while (zeroCount > k) {
            if (arr[left] === 0) zeroCount--;
            left++;  // Shrink window
        }

        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
}

console.log(longestOnes([1,1,0,0,1,1,1,0,1,1,0,1], 2)); // Output: 6
