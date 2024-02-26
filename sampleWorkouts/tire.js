// Problem: Implement a trie and insert words into it.

class TrieNode {
    constructor() {
      this.children = new Map();
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
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
  }
  
  // Usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  console.log(trie); // Trie structure with "apple" and "app" inserted
  