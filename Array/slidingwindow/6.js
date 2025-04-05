// leetCode: 187. Repeated DNA Sequences

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.
// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.




/*********** Brute force approch ************/

// Time complexity: O(n^2)
// Space complexity: O(n)


// Steps


//1. Create a hash map to store the count of each substring.
//2. Iterate through the string and extract each substring of length 10.
//3. If the substring already exists in the hash map, increment its count.
// 4. If the substring does not exist in the hash map, add it with a count of 1.
// 5. After iterating through the string, create an array to store the result.
// 6. Iterate through the hash map and add any substring with a count greater than 1 to the result array.
// 7. Return the result array.


function findRepeatedDnaSequences(s) {
    let count = {};
    let result = [];
    for (let i = 0; i <= s.length - 10; i++) {
        let subStr = s.slice(i, i + 10);
        if (count[subStr]) {
            count[subStr]++;
        } else {
            count[subStr] = 1;
        }
    }
    for (let key in count) {
        if (count[key] > 1) {
            result.push(key);
        }
    }
    return result;
}
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // ["AAAAACCCCC", "CCCCCAAAAA"]



/*********** Sliding window approch ************/

// Time complexity: O(n)
// Space complexity: O(n)

// Steps

// 1. Create a hash map to store the count of each substring.
// 2. Create a set to store the result.
// 3. Iterate through the string and extract each substring of length 10.
// 4. If the substring already exists in the hash map, add it to the result set.
// 5. If the substring does not exist in the hash map, add it with a count of 1.
// 6. After iterating through the string, convert the result set to an array and return it.
// 7. Return the result array.

function findRepeatedDnaSequences(s) {
    let count = new Map();
    let result = new Set();
    for (let i = 0; i <= s.length - 10; i++) {
        let subStr = s.slice(i, i + 10);
        if (count.has(subStr)) {
            result.add(subStr);
        } else {
            count.set(subStr, 1);
        }
    }
    return Array.from(result);
}