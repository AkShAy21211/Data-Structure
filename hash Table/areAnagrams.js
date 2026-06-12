function areAnagrams(s1, s2) {
    // Check if the strings have the same length
    if (s1.length !== s2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');

    return sortedS1 === sortedS2;
}

let s1 = 'car';
let s2 = 'arc';
console.log(areAnagrams(s1, s2)); // true

s1 = 'car';
s2 = 'aac';
console.log(areAnagrams(s1, s2)); // false
