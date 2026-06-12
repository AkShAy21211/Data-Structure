// Function to find the longest substring with unique characters in a given string

// Time complexity: O(n)

// Space complexity: O(n)

// Example usage:
function longestSubstringWithUniqueChar(str) {
  let charSet = new Set();
  let left = 0;
  let longest = 0;
  let result = 0;

  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }

    charSet.add(str[right]);

    if (right - left + 1 > longest) {
      longest = right - left + 1;
      result = str.slice(left, right + 1);
    }
  }
  return result;
}

console.log(longestSubstringWithUniqueChar("hello")); // Expected output: "hel"

