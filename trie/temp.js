class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  find(word) {
    let node = this.root;

    for (const char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return [];
      }
    }
    return this._findRecursive(node, word);
  }

  _findRecursive(node, currentWord) {
    const result = [];
    if (node.isEndOfWord) {
      result.push(currentWord);
    }
    for (const char in node.children) {
      result.push(
        ...this._findRecursive(node.children[char], currentWord + char)
      );
    }
    return result;
  }
}

// Example usage

const trie = new Trie();
const words = [
  "apple",
  "app",
  "application",
  "banana",
  "orange",
  "pear",
  "peach",
];

for (const word of words) {
  trie.insert(word);
}

console.log(trie.search("application")); // true

console.log(trie.find("p")); // ['apple', 'app', 'application', 'banana', 'orange', 'pear', 'peach']
