class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const child of word) {
      if (!node.children[child]) {
        node.children[child] = new TrieNode();
      }

      node = node.children[child];
    }
    node.end = true;
  }

  getWord(prefix) {
    let node = this.root;
    for (const child of prefix) {
      if (!node.children[child]) {
        return [];
      }
      node = node.children[child];
    }
    return this.getAllWords(node, prefix);
  }

  getAllWords(node, prefix) {
    let words = [];

    if (node.end) {
      words.push(prefix);
    }

    for (const char in node.children) {
      words.push(...this.getAllWords(node.children[char], prefix + char));
    }

    return words;
  }

  delete(word){

    this.deleteRecursive(word,this.root,0);
  }


  deleteRecursive(node,word,index){

    if(!node){
      return false;
    }
    if(index === word.length){

      if(!node.end){

        return false
      }

      node.end = false;

      return Object.keys(node.children).length===0;
    }

    const char = word[index];
    const nextNode = node.children[char];

    if(!nextNode) return false;

    const shouldDeleteCurrentNode = this.deleteRecursive(nextNode, word, index + 1);
    if(shouldDeleteCurrentNode){
      delete node.children[char];
      return Object.keys(node.children).length === 0;
    }
    return false;
  }
}
  // Example usage
  const trie = new Trie();
  const words = ["apple", "apricot", "banana", "orange", "pear", "peach"];
  
  // Insert words into the trie
  for (const word of words) {
    trie.insert(word);
  }

  console.log(trie.getWord('app'))