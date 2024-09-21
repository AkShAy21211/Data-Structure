function heapSort(arr) {
    // Build a min-heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // Extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Move current root (smallest) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call min-heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, size, root) {
    let smallest = root;
    let left = 2 * root + 1;
    let right = 2 * root + 2;

    // If the left child is smaller than the root
    if (left < size && arr[left] < arr[smallest]) {
        smallest = left;
    }

    // If the right child is smaller than the smallest so far
    if (right < size && arr[right] < arr[smallest]) {
        smallest = right;
    }

    // If the smallest is not the root
    if (smallest !== root) {
        [arr[root], arr[smallest]] = [arr[smallest], arr[root]];

        // Recursively heapify the affected subtree
        heapify(arr, size, smallest);
    }
}

const arr = [2, 4, 6, 3, 2, 1, 9];
console.log(heapSort(arr));  // Reverse to get descending order
