function findMaxSumInSubArray(arr, k) {
  let result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let max = arr[i];

    for (let j = 1; j < k; j++) {
      if (arr[i + j] > max) {
        max = arr[j + i];
      }
    }
    result.push(max);
  }
  return result;
}

console.log(findMaxSumInSubArray([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [10, 23, 3, 20]

// time complexity is O(n^2)

//using sliding window

function maxSlidingWindowQueue(arr, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < arr.length; i++) {
    if (deque.length > 0 && deque[0] < i - k) {
      deque.shift();
    }
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }
  return result;
}

console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [1, 3, 5, 3, 6, 7]
