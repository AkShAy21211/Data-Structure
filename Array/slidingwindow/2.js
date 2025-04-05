// Q. Find the longest substring that contains at most K distinct characters.


/*********brute force approach***********/

// 1. Iterate through the string with two nested loops.
// 2. For each substring, count the number of distinct characters using a hashmap or set.
// 3. If the count exceeds K, break the inner loop and move to the next starting index.
// 4. Keep track of the maximum length of valid substrings found.
// 5. Return the maximum length.


// time and space completely
// O(n^2) and O(n) respectively

function longestSubstringKDistinct(s, k) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const charCount = new Map();
    for (let j = i; j < s.length; j++) {
      charCount.set(s[j], (charCount.get(s[j]) || 0) + 1);
      if (charCount.size > k) break;
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
}





/***********optimized approach using sliding window technique8? **************/

// 1. Use a hashmap to store character frequencies.
// 2. Expand the window by adding characters until distinct character count exceeds K.
// 2. Shrink the window from the left until distinct character count is ≤ K.
// 3. keep track of the maximum window size

// time and space complexity
// O(n) and O(k) respectively

function longestSubstringKDistinct(s, k) {
  let left = 0;
  let maxLength = 0;

  const charCount = new Map();

  
  for (let right = 0; right < s.length; right++) {
    charCount.set(s[right], (charCount.get(s[right]) || 0)+1) ;
    while (charCount.size > k) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) charCount.delete(s[left]);
      left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}


// Test cases:

console.log(longestSubstringKDistinct("eceba", 2)); // Output: 3
