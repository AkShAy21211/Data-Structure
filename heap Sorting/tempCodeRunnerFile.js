
// MAX HEAP

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
function heapSort(arr) {
    const n = arr.length;

    // Build Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
// Example Usage:
const arrayToSort = [4, 2, 8, 5, 1];
heapSort(arrayToSort);
console.log(arrayToSort); // [1, 2, 4, 5, 8]
