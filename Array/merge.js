function mergeArray(arr1, arr2) {
  const arr = [...arr1, ...arr2];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr1 = [10, 20, 30];

const arr2 = [35, 25, 15];

// optimised version

const mergeArrayOptimised = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeArrayOptimised(arr1, arr2)); // Output: [10, 15, 20, 25, 30, 35]
console.log(mergeArray(arr1, arr2)); // Output: [10, 15, 20, 25, 30, 35]
