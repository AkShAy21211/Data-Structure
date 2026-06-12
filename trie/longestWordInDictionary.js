//longest word in dictionary
// AnotherFile.js
const Trie = require("./p1");
function longestWord(words) {
    let trie = new Trie();
    words.sort(); // Sorting lexicographically
    let longest = "";
    for (let word of words) {
      if (word.length === 1 || trie.search(word.substring(0, word.length - 1))) {
        trie.insert(word);
        if (word.length > longest.length) {
          longest = word;
        }
      }
    }
  
    return longest;
  }
  
  // Example usage:
  let wordList = ["w", "wo", "wor", "worl", "world"];
  console.log(longestWord(wordList)); // "world"
  