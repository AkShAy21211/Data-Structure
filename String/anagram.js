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

// group strings that are anagrams

function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// complexity O(nklogk) where n is number of strings and k is max length of a string
// any other approach possible?

// yes using frequency count we can reduce it to O(nk)
function groupAnagrams2(strs) {
  const map = {};
  for (const str of strs) {
    const count = new Array(26).fill(0);  
    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = count.join("#");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
}


// Sure, I’ll give a full clean coded solution that handles all the edge cases we discussed, including:

// Unicode characters

// Case normalization

// Trimming spaces

// Optional punctuation removal

// Grouping duplicates

// Empty strings

// But I want you to think about one design choice first:

// Should punctuation and spaces be ignored when determining anagrams?

// Two common semantic interpretations:

// Strict anagram → every character counts (including punctuation & spaces)

// Normalized anagram → ignore spaces/punctuation, lowercase everything

// Production systems pick one based on use-case.
// Interviewers often go with (2).
// I’ll implement both variants and make the normalization configurable.


// Utility: normalize the string based on a chosen rule set.
// Options:
// - lowercase
// - trim spaces
// - remove internal spaces
// - remove punctuation
// - unicode safe
let s ='fdg'
Zfunction normalize(str, { spaces = "collapse", punctuation = true } = {}) {
  let s = str.normalize();  // unicode normalization
  s = s.toLowerCase();

  // trim external whitespace
  s = s.trim();

  // remove internal spaces if collapse mode
  if (spaces === "collapse") {
    s = s.replace(/\s+/g, "");
  }

  // strip punctuation if required
  if (punctuation) {
    s = s.replace(/[^\p{L}\p{N}]+/gu, ""); 
    // \p{L} letters, \p{N} numbers; unicode safe
  }

  return s;
}


// Anagram check using sorted unicode-safe comparison
function isAnagramSort(str1, str2) {
  const a = normalize(str1).split("").sort().join("");
  const b = normalize(str2).split("").sort().join("");
  return a === b;
}


// Anagram check using frequency map (unicode-safe)
function isAnagramCount(str1, str2) {
  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const map = new Map();

  for (const ch of s1) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (const ch of s2) {
    if (!map.has(ch)) return false;
    map.set(ch, map.get(ch) - 1);
    if (map.get(ch) === 0) map.delete(ch);
  }

  return map.size === 0;
}


// Group anagrams — using sorted signature (unicode-safe)
function groupAnagrams(strs) {
  const map = new Map();

  for (const raw of strs) {
    const s = normalize(raw);
    const key = s.split("").sort().join("");

    if (!map.has(key)) map.set(key, []);
    map.get(key).push(raw); // store raw string for readability
  }

  return Array.from(map.values());
}


// Group anagrams — using frequency map signature (unicode-safe)
function groupAnagramsCount(strs) {
  const map = new Map();

  for (const raw of strs) {
    const s = normalize(raw);

    // frequency signature as stringified map to preserve unicode
    const freq = new Map();
    for (const ch of s) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // convert to signature (deterministic ordering)
    const key = Array.from(freq.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([ch, count]) => `${ch}:${count}`)
      .join("|");

    if (!map.has(key)) map.set(key, []);
    map.get(key).push(raw);
  }

  return Array.from(map.values());
}


// ---- TEST INPUT WITH EDGE CASES ----

const input = [
  "Eat",
  "Tea",
  "  tea ",
  "eat!!",
  "tan",
  "nat",
  "",
  "résumé",
  "ésumér",
  "bat"
];

console.log("Sort-based:", groupAnagrams(input));
console.log("Count-based:", groupAnagramsCount(input));

console.log("Check résumé vs ésumér:", isAnagramSort("résumé", "ésumér"));
console.log("Check Eat vs tea:", isAnagramCount("Eat", "tea"));
