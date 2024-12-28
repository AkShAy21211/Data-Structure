function findStringIsAnagram(str1, str2) {
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  return str1.join("") === str2.join("");
}

// SECOND APPROACH

function findStringIsAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (const char of str1.toLowerCase()) {
    map[char] = (map[char] || 0) + 1;
  }

  console.log(map);
  
  for (const char of str2.toLowerCase()) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
}

console.log(findStringIsAnagram2("listen", "sillent")); // true
