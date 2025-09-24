// 3364. Minimum Positive Sum Subarray 

/***** You are given an integer array nums and two integers l and r. Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.

Return the minimum sum of such a subarray. If no such subarray exists, return -1.

A subarray is a contiguous non-empty sequence of elements within an array. *****/



// steps

// 1. Initialize minSum as Infinity.
// 2. Iterate through all possible subarrays of length l to r.
// 3. For each subarray, calculate its sum.
// 4. If the sum is greater than 0 and its length is between l and r, update minSum if necessary.
// 5. After iterating through all possible subarrays, return minSum.

// Time and space complexity
// O(n^2) to iterate through all possible subarrays, and O(1) to calculate the sum and update minSum.


var minimumSumSubarray = function (nums, l, r) {

    const n = nums.length
    let minSum = Infinity
    for (let i = 0; i < n; i++) {

        let sum = 0;
        for (let j = i; j < i + r && j < n; j++) {

            sum += nums[j]
            if (j - i + 1 >= l && sum > 0) {
                minSum = Math.min(minSum, sum)
            }
        }
    }
    return minSum === Infinity ? -1 : minSum;

};