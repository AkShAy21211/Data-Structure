function maxSubArray(nums) {
    let maxSum = nums[0], currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }

  // Example usage:
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray(nums)); // Output: 6

  // Explanation of working
  // The function maxSubArray takes an array of integers as input and returns the maximum sum of a contiguous subarray.
  // It initializes two variables, maxSum and currentSum, to the first element of the array.
  // It then iterates through the array starting from the second element.
  // For each element, it calculates the maximum sum of a contiguous subarray ending at that element by taking the maximum of the current element and the sum of the current element and the previous subarray sum.
  // It updates the maxSum variable if the current subarray sum is greater than the previous maxSum.
  // Finally, it returns the maxSum variable, which represents the maximum sum of a contiguous subarray in the input array.
  // The time complexity of this function is O(n), where n is the length of the input array.
  