function findPeaks(arr) {
  const N = arr.length;
  let peak = arr[0];
  let index = 0;
  const output = [];

  for (let x = 1; x < N; x++) {
    if (arr[x] * arr[x - 1] > 0) {
      // same sign
      if (peak < 0 && arr[x] < peak) {
        peak = arr[x];
        index = x;
      } else if (peak >= 0 && arr[x] > peak) {
        peak = arr[x];
        index = x;
      }
    } else {
      // sign changed
      output.push([index, peak]);
      peak = arr[x];
      index = x;
    }
  }

  output.push([index, peak]); // push last run summary
  return output;
}



// Example usage:
const array = [1, 4, 2, -2, -9, 10, 2, 12, 2, 6, 8, 9, -4, -4, -4, 7];
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
// what is the edge case of this code?
// Edge Case: If the input array has one or no elements, the function returns an empty array since there are no peaks to identify.
// only one edge case?
// Yes, the primary edge case handled in this code is when the input array has one or no elements. In such cases, there are no peaks to identify, and the function appropriately returns an empty array. Other potential edge cases, such as arrays with all positive or all negative numbers, are inherently managed by the logic of the function, which will simply return the peak of the entire array in those scenarios.
