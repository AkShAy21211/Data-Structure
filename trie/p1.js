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
    search(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    findWordsWithPrefix(prefix) {
        let node = this.root;
        let words = [];

        for (const char of prefix) {
            if (!node.children[char]) {
                return words; // Return the current list of words if the prefix is not present
            }

            node = node.children[char];
        }

        this.collectWords(node, prefix, words);
        return words;
    }

    collectWords(node, currentWord, words) {
        if (node.isEndOfWord) {
            words.push(currentWord);
        }

        for (const char in node.children) {
            this.collectWords(node.children[char], currentWord + char, words);
        }
    }
}

// Example usage:
const trie = new Trie();
// trie.insert("apple");
// trie.insert("app");
// trie.insert("apricot");
// console.log(trie.search("app"));
// console.log(trie.findWordsWithPrefix("ap")); 
// Output: ['apple', 'app', 'apricot']


module.exports = Trie;
