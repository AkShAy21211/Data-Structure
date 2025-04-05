// Q. Problem: Given two strings s and p, return an array of start indices where p's anagram is found in s.


/*********brute force approach***********/

// 1. Iterate through the string s with a window of size equal to the length of p.
// 2. For each window, check if it is an anagram of p by sorting both strings and comparing them.
// 3. If they are equal, store the starting index of the window in the result array.
// 4. Return the result array.


// Time complexity is O(n * m log m) where n is the length of s and m is the length of p.
function findAnagrams(s, p) {
    let result = [];
    for (let i = 0; i <= s.length - p.length; i++) {
        let temp = s.slice(i, i + p.length);
        if (isAnagram(temp, p)) result.push(i);
    }
    return result;
}

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

/*********optimized approach***********/

// 1. Use a frequency map to count characters in p.
// 2. Expand the window while updating character counts in s.
// 3. If all character counts match, store the index in the result array.
// 4. Shrink the window from the left when it reaches the size of p.
// 5. Return the result array.



// Time complexity is O(n + m) where n is the length of s and m is the length of p.

function findAnagrams(s, p) {
    let result = [], left = 0, right = 0;
    let pCount = new Map(), sCount = new Map();
    
    for (let char of p) pCount.set(char, (pCount.get(char) || 0) + 1);

    while (right < s.length) {
        let char = s[right];
        sCount.set(char, (sCount.get(char) || 0) + 1);

        if (right - left + 1 === p.length) {
            if (compareMaps(sCount, pCount)) result.push(left);
            let leftChar = s[left];
            if (sCount.get(leftChar) === 1) sCount.delete(leftChar);
            else sCount.set(leftChar, sCount.get(leftChar) - 1);
            left++;
        }

        right++;
    }

    return result;
}


// 1. Approach: Sliding Window + Hash Map

// 2. Use a frequency map to count characters in p.

// 3. Expand window while updating character counts.

// 4. If all character counts match, store the index.

function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}

console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
