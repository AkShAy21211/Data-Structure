function generateSubstrings(str) {
  const substrings = [];

  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; end <= str.length; end++) {
      substrings.push(str.substring(start, end));
    }
  }

  return substrings;
}

// Example usage:
const str = "anu";
console.log(generateSubstrings(str)); // ["a", "ab", "abc", "b", "bc", "c"]
