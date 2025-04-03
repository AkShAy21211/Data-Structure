# Sliding Window Technique

The **Sliding Window Technique** is a powerful approach to efficiently solve problems involving arrays, strings, or sequences by maintaining a moving “window” of elements and performing operations as the window slides through the data. This technique helps reduce time complexity compared to brute-force methods.

## Problem Statement
Given an array of integers and a fixed window size, find the **maximum sum** of any contiguous subarray within that window size.

## Example
**Input:**
```plaintext
Array: [2, 1, 5, 1, 3, 2]
Window Size: 3
```

**Step-by-Step Execution:**

1. **Initialization:**
   - Start with the first 3 elements: `[2, 1, 5]`
   - Calculate their sum: `2 + 1 + 5 = 8`
   - Set `maxSum = 8`

2. **Slide the Window:**
   - Move the window one step to the right: `[1, 5, 1]`
   - Calculate the sum: `1 + 5 + 1 = 7`
   - Compare with `maxSum (8)`, no update needed.

3. **Slide the Window:**
   - Move the window again: `[5, 1, 3]`
   - Calculate the sum: `5 + 1 + 3 = 9`
   - Update `maxSum = 9`

4. **Slide the Window:**
   - Move the window: `[1, 3, 2]`
   - Calculate the sum: `1 + 3 + 2 = 6`
   - Compare with `maxSum (9)`, no update needed.

5. **Final Result:**
   - Maximum sum found: **`9`**

## JavaScript Implementation
```javascript
function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Compute sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Example usage
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSubarraySum(arr, k)); // Output: 9
```

## Complexity Analysis
- **Time Complexity:** `O(n)` – We iterate through the array once.
- **Space Complexity:** `O(1)` – We use only a few extra variables.

## Applications
- Finding maximum/minimum subarray sums
- Longest substring with distinct characters
- Finding averages of subarrays
- Detecting patterns in time series data

This approach is significantly more efficient than brute-force solutions, making it ideal for handling large datasets efficiently. 🚀

