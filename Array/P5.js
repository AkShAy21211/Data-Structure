/**
 * @param {Array} arr 
 * @returns {number} 
 */

function sumOfUniqueElements(arr) {
    const frequencyMap = new Map();
    
    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap.has(arr[i])) {
            frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
        } else {
            frequencyMap.set(arr[i], 1);
        }
    }
    
    let result = 0;
    
    // Sum the elements that appear exactly once
    for (const [key, value] of frequencyMap.entries()) {
        if (value === 1) {
            result += key;
        }
    }
    
    return result;
}

console.log(sumOfUniqueElements([1, 2, 1, 1, 1]));  // Output: 2
console.log(sumOfUniqueElements([1, 2, 3, 2, 3, 4]));  // Output: 5 (1 + 4)
console.log(sumOfUniqueElements([1, 1, 1, 1, 1]));  // Output: 0
