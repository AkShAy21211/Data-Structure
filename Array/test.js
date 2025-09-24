function findMax(arr, k) {
  let max = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// Example Usage
console.log(findMax([2, 1, 5, 1, 3, 2], 3)); // Output: 9
