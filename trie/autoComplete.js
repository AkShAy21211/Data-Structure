class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (node.children[char]) {
          node = node.children[char];
        } else {
          return [];
        }
      }
      return this._findAllWords(node, prefix);
    }
  
    _findAllWords(node, prefix) {
      const result = [];
      if (node.isEndOfWord) {
        result.push(prefix);
      }
  
      for (const char in node.children) {
        result.push(...this._findAllWords(node.children[char], prefix + char));
      }
      return result;
    }
  }
  
  // Example usage
  const trie = new Trie();
  const words = ["apple", "apricot", "banana", "orange", "pear", "peach"];
  
  // Insert words into the trie
  for (const word of words) {
    trie.insert(word);
  }
  
  // Autocomplete function
  function autocomplete(prefix) {
    return trie.search(prefix);
  }
  
  // Test autocomplete function
  const prefix = "ap";
  const suggestions = autocomplete(prefix);
  console.log(`Autocomplete suggestions for "${prefix}":`, suggestions);
  