class TrieNode {
    constructor() {
        this.children = {};  // Map of children nodes
        this.isEndOfWord = false;  // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();  // Root node of the trie
    }

    // Insert a word into the trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Trie serialization (convert trie into a string)
    serialize() {
        const serializeNode = (node) => {
            let result = '';
            for (let char in node.children) {
                result += char + serializeNode(node.children[char]);
            }
            if (node.isEndOfWord) {
                result += '#';  // Special marker for end of word
            }
            return '(' + result + ')';
        };

        return serializeNode(this.root);
    }

    // Trie deserialization (convert string back into a trie)
    deserialize(data) {
        const deserializeNode = (data, index) => {
            const node = new TrieNode();
            let char = data[index];
            while (char !== ')') {
                if (char === '#') {
                    node.isEndOfWord = true;
                    index++;
                } else if (char === '(') {
                    const [childNode, newIndex] = deserializeNode(data, index + 1);
                    node.children[data[index - 1]] = childNode;
                    index = newIndex;
                } else {
                    index++;
                }
                char = data[index];
            }
            return [node, index + 1];
        };

        [this.root] = deserializeNode(data, 1);  // Start deserialization after the initial '('
    }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
trie.insert("car");

const serialized = trie.serialize();
console.log("Serialized Trie:", serialized);  // Example: (c(a(t#)(p#)(r#)))

const newTrie = new Trie();
newTrie.deserialize(serialized);
console.log("Deserialized Trie:");
console.log(newTrie);
