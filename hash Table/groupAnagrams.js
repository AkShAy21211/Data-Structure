//Group anagrams from a list of strings.

const groupAnagrams = (words) => {
  const anagramMap = new Map();
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    
    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }

  }
  return Array.from(anagramMap.values());
};

const words = ["listen", "silent", "pants", "taps", "star", "arts"];

console.log(groupAnagrams(words));
