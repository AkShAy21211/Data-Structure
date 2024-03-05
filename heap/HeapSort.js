function heapSort(arr) {
    // Step 1: Build Max Heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // Step 2: Sort the Heap
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify the remaining elements
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Sample workouts
let array1 = [12, 11, 13, 5, 6, 7];
let array2 = [5, 2, 9, 1, 5, 6];
let array3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(heapSort(array1.slice())); // Output: [5, 6, 7, 11, 12, 13]
console.log(heapSort(array2.slice())); // Output: [1, 2, 5, 5, 6, 9]
console.log(heapSort(array3.slice())); // Output: [1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
