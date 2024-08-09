function findCommonElement(matrix) {
    if (matrix.length === 0) return -1;

    const frequencyMap = new Map();
    const numRows = matrix.length;
    
    // Iterate through each row
    for (let row of matrix) {
        // Use a set to track unique elements in the current row
        const rowSet = new Set(row);
        
        // Increment the frequency count in the map for each element in the row
        for (let num of rowSet) {
            if (frequencyMap.has(num)) {
                frequencyMap.set(num, frequencyMap.get(num) + 1);
            } else {
                frequencyMap.set(num, 1);
            }
        }
    }

    let minCommonElement = -1;

    // Iterate through the frequencyMap to find the smallest element that appears in all rows
    for (let [key, value] of frequencyMap) {
        if (value === numRows) {
            if (minCommonElement === -1 || key < minCommonElement) {
                minCommonElement = key;
            }
        }
    }

    return minCommonElement;
}

// Example usage:
const matrix = [
    [3,9,5,1,0],
    [1,5,3,9,4],
    [7,3,8,9,0]
];

console.log(findCommonElement(matrix)); // Output: 2
