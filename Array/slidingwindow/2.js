// Q. Find the longest substring that contains at most K distinct characters.

// 1. Use a hashmap to store character frequencies.

// 2. Expand the window by adding characters until distinct character count exceeds K.

// 2. Shrink the window from the left until distinct character count is ≤ K.

// 3. eep track of the maximum window size

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
