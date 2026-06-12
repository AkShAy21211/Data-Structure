// Problem: Remove Duplicates from Sorted Array
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * Removes duplicates in-place from a sorted array such that each element appears only once.
 * Uses the Two-Pointer technique (Slow and Fast pointers).
 * @param {number[]} nums 
 * @returns {number} The number of unique elements
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0; // Slow pointer: tracks the position of the last unique element found

  for (let j = 1; j < nums.length; j++) { // Fast pointer: scans the array
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; // Move the unique element forward
    }
  }

  return i + 1;
}

// Demo
let arr1 = [1, 1, 2];
let k1 = removeDuplicates(arr1);
console.log(`Unique count: ${k1}, Array:`, arr1.slice(0, k1)); // Output: 2, [1, 2]

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(arr2);
console.log(`Unique count: ${k2}, Array:`, arr2.slice(0, k2)); // Output: 5, [0, 1, 2, 3, 4]