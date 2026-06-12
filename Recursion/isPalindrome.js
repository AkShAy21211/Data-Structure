// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function isPalindrome(str) {
    // Base cases
    if (str.length === 0 || str.length === 1) return true;
    
    // Check if first and last characters are equal
    if (str[0] !== str[str.length - 1]) return false;
    
    // Recursive call by slicing the string to remove the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true
console.log(isPalindrome(""));        // true
