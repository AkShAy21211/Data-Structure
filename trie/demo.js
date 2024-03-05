class Node{

  constructor(){
    this.children ={};
    this.end = false;
  }

}

class Trie{
  constructor(){

    this.root = new Node();
  }

  insert(word){

    let node  = this.root;

    for(let char of word){
      if(!node.children[char]){

        node.children[char] = new Node()
      }

      node = node.children[char];
    }

    node.end = true
  }


  search(word){

    let node  = this.root;

    for(const char of word){

      if(!node.children[char]){

        return false;
      }

      node = node.children[char];
    }
    return node.end;
  }

  getWord(prefix){

    let node = this.root;
    for(const char of prefix){
      if(!node.children[char]){
        return [];
      }

      node = node.children[char];
    }

   return  this.getAllWords(node,prefix);
  }

  getAllWords(node,current){

    let word = [];

    if(node.end){
      word.push(current)
    }

    for(const char in node.children){

      word.push(...this.getAllWords(node.children[char],current+char))

    }

    return word;
  }
}

  // Example usage
  const trie = new Trie();
  const words = ["apple", "apricot", "banana", "orange", "pear", "peach"];
  
  // Insert words into the trie
  for (const word of words) {
    trie.insert(word);
  }
  

  // Test autocomplete function
  const prefix = "b";

  console.log(trie.search("apple"));
  console.log(`Autocomplete suggestions for "${prefix}":`, trie.getWord(prefix));
  