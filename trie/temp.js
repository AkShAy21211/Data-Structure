class Node{

    constructor(){
        this.children = {};
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){

        let node  = this.root;

        for(const char of word){
            if(!node.children[char]){

                node.children[char] = new Node();
            }

            node = node.children[char];

        }

        node.end = true;
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

        let node  = this.root;
        for(const char of prefix){
            if(!node.children[char]){

                return [];
            }

            node = node.children[char];
        }

        return this.getAllWords(node,prefix);
    }


    getAllWords(node,currentWord){

        let words = [];

        if(node.end){

            words.push(currentWord)
        }

        for(const char in node.children){

            words.push(...this.getAllWords(node.children[char],currentWord+char))
        }

        return words;
    }
}

const trie = new Trie();

trie.insert("akshay");
trie.insert("banana");
trie.insert("apple");
trie.insert("angry");

console.log(trie.root);

console.log(trie.search("akshy"));

console.log(trie.getWord("a"));
