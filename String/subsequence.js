function generateSubsequences(str) {
  function recurse(index, current) {
    if (index === str.length) {
      return [current];
    }

    // Exclude the current character and proceed to the next
    const excludeCurrent = recurse(index + 1, current);

    // Include the current character and proceed to the next
    const includeCurrent = recurse(index + 1, current + str[index]);

    // Combine the results of including and excluding the current character
    return [...excludeCurrent, ...includeCurrent];
  }

  return recurse(0, "");
}

// Example usage:
const str = "abc";
console.log(generateSubsequences(str)); // ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
