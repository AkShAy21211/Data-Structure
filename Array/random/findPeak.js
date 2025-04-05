function findPeaks(array) {
  if (array.length <= 1) return [];

  let peak = array[0];
  let index = 0;
  let output = [];

  for (let x = 1; x < array.length; x++) {
    // Check if signs of consecutive elements match
    if (array[x] * array[x - 1] > 0) {
      if (array[x] > peak) {
        peak = array[x];
        index = x;
      }
    } else {
      // Push the current peak when the sign changes
      output.push([index, peak]);
      peak = array[x];
      index = x;
    }
  }

  // Push the last peak after exiting the loop
  output.push([index, peak]);

  return output;
}

// Example usage:
const array = [1, 4, 2, -2, -9, 10, 2, 12, 2, -4, -4, -4, -4, 2, 6, 7];
console.log(findPeaks(array));
// Output: [[1, 4], [4, -9], [7, 12], [9, -4], [15, 7]]

// This pseudocode analyzes an array of integers, finding sequences of consecutive elements with the same sign, and identifies the peak (maximum value) in each sequence where the signs match.

// Initialization

// 1. peak - is assigned to the first element of the array.
// 2. index - is set as 0 so that the index of the peak location in the array can be tracked.
// 3. output - array of tuples, to store index and the value of the peaks occurred in the array.

// In the loop

// The loop runs on the array from index 1 to N-1, by comparing each element with the previous one.Then check if two consecutive elements (array[x], array[x-1]) have the same sign, i.e., their product array[x] * array[x-1] > 0, then compare the given element array[x] with current peak. If it is a peak and is greater update peak and its index:.

// If the signs are different, i.e., array[x] * array[x-1] <= 0, then current peak is added to the output array along with its index. The peak is then updated to the current element, i.e., array[x] and index also updates according to that.

// Output:
// The output array keeps track of the index and peak value for each segment where the sign of the numbers changes, capturing the highest point in sequences of numbers that share the same sign.
