// Problem: Two Sum II - Input Array Is Sorted
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * Finds two numbers in a sorted array that add up to a specific target.
 * Uses the Two-Pointer technique (Left and Right pointers).
 * @param {number[]} numbers 
 * @param {number} target 
 * @returns {number[]} 1-indexed indices of the two numbers
 */
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // Returning 1-based indices
    } else if (sum < target) {
      left++; // Need a larger sum
    } else {
      right--; // Need a smaller sum
    }
  }
  return [];
}

console.log("Two Sum (Sorted):", twoSumSorted([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log("Two Sum (Sorted):", twoSumSorted([2, 3, 4], 6));     // Output: [1, 3]