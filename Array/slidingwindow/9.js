// First Negative Number in Every Window of Size


// Time Complexity: O(n)

// Space Complexity: O(k)

//steps

/*

1. Initialize an empty queue and an empty result array.

2. Iterate through the array from left to right.

3. If the current element is negative, push its index to the queue.

4. Remove elements from the queue that are out of the current window (i - k).

5. If the queue is not empty, append the smallest negative number to the result array.

6. Return the result array.


*/

function firstNegative(arr, k) {
  let result = [];
  let queue = []; // to store indices of negative numbers

  for (let i = 0; i < arr.length; i++) {
    // Push negative number's index to queue
    if (arr[i] < 0) queue.push(i);

    // Remove elements out of window
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // Start recording result once we have a full window
    if (i >= k - 1) {
      result.push(queue.length ? arr[queue[0]] : 0);
    }
  }

  return result;
}
// arr = [12, -1, -7, 8, 15, 30, 16, 28], k = 3

console.log(firstNegative([12, -1, -7, 8, 15, 30, 16, 28], 3)); // Output: [12, -1, -7, 0, 0, 0, 0, 0]
