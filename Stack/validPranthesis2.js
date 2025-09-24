function isValidParentheses(s) {
    const stack = [];
    const bracketPairs = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
      if (bracketPairs[char]) {
        stack.push(char);
      } else {
        if (bracketPairs[stack.pop()] !== char) {
          return "unbalanced";
        }
      }
    }
  
    return "balanced";
  }
  
  // Example usage:
  console.log(isValidParentheses("(()()[[[[{}]]]])"));  // Output: true
  console.log(isValidParentheses("()[]{}"));  // Output: true
  console.log(isValidParentheses("(]"));  // Output: false
  