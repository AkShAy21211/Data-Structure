// Q. Problem: Find the smallest contiguous subarray whose sum is at least k.

// 1. Approach: Sliding Window

// 2. Expand the window by adding elements until sum >= k.

// 3. Shrink window from the left while sum remains >= k.

// 4. Track the minimum window size.

function minSubarrayLen(k, arr) {
    let left = 0, sum = 0, minLength = Infinity;

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

console.log(minSubarrayLen(7, [2,3,1,2,4,3])); // Output: 2 ([4,3])
