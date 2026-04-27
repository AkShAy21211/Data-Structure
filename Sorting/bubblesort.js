// using dio while loop
const bubble = (arr) => {
  let swap;
  do {
    swap = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  return arr;
};

// another way using for loop
 
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


// Bubble Sort is a comparison-based sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. The worst-case and average-case time complexity of Bubble Sort is 
// 𝑂(n^2) due to its nested loops.

// Outer loop runs 𝑛−1 times (in the worst case).
// Inner loop performs 𝑛−𝑖−1 comparisons in each iteration (where i is the current iteration of the outer loop).


// Bubble Sort, as a comparison-based algorithm, cannot achieve 
// O(n) complexity for general sorting tasks. If linear time complexity is required, 
// consider using specialized non-comparison-based algorithms that suit the problem's constraints.



let arr1 = [-5, 12, -8, 3, 0, -3, 11, -14, 13, -12];

console.log(bubble(arr1));
