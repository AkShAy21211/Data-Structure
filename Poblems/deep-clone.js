//deepclone obj without inbuilt methoods

function deepClone(obj) {
    // Check if obj is null or not an object
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if it's not an object
    }

    // Create a new object or array to hold the cloned values
    const clone = Array.isArray(obj) ? [] : {};

    // Recursively copy properties or elements
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

// Example usage
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "traveling"]
};

const cloned = deepClone(original);

console.log(cloned); // Deep cloned object
console.log(cloned === original); // false
console.log(cloned.address === original.address); // false
