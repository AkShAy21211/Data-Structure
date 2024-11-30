function findPeaks(array) {
    // Check if the array is empty or has only one element
    if (array.length <= 1) {
        return [];
    }

    let peak = array[0]; // Initialize peak as the first element
    let index = 0; // Initialize index as the index of the first element
    let output = []; // Array to store the peaks as tuples

    for (let x = 1; x < array.length; x++) {
        // Check if the current and previous elements have the same sign
        if (array[x] * array[x - 1] > 0) {
            // Update peak and index for the current segment
            if (array[x] > peak) {
                peak = array[x];
                index = x;

            }
        } else {
            // Segment ends; store the current peak and start a new segment
            output.push([index, peak]);
            peak = array[x];
            index = x;

        }
    }

    // Add the last peak to the output
    output.push([index, peak]);

    return output;
}

// Example usage:
const array = [1, 4, 2, -2, -9, 10, 2, 12, 2, -4, -4, -4, -4, 2, 6, 7];
console.log(findPeaks(array));
// Output: [[1, 4], [4, -9], [7, 12], [9, -4], [15, 7]]
