function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}

//complexity

// 1. Time Complexity: O(n)
// 2. Space Complexity: O(n)


function isPalindrom2(str) {
  let start = 0;
  let end = start.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}

// Complexity

// 1. Time Complexity: O(n)
// 2. Space Complexity: O(1)

function isPalindrom3(str) {
  if (str.length<=1) return true;

  if (str[0] !== str[str.length - 1]) return false;
  
  return isPalindrom3(str.slice(1, str.length - 1));
}

