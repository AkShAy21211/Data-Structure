//Brute force
function rotateArray1(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
}

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

//Optimized
function rotateArrayRight(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, arr.length - 1); // reverse whole array
  reverseArray(arr, 0, k - 1); // reverse first k elements
  reverseArray(arr, k, arr.length - 1); // reverse remaining elements
}

const array = [1, 2, 3, 4, 5, 6, 7];

function rotateArrayLeft(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, k - 1); // Step 1: Reverse first k
  reverseArray(arr, k, arr.length - 1); // Step 2: Reverse the rest
  reverseArray(arr, 0, arr.length - 1); // Step 3: Reverse whole
}

rotateArrayRight(array, 2)
console.log(array);


