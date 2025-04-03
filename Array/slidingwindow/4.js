// Q. Problem: Given two strings s and p, return an array of start indices where p's anagram is found in s.

// 1. Approach: Sliding Window + Hash Map

// 2. Use a frequency map to count characters in p.

// 3. Expand window while updating character counts.

// 4. If all character counts match, store the index.

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

function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}

console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
