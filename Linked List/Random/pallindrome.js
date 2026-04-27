const { NodeList } = require("./index.js");

const isPallindrome = (head) => {
  let string1 = string2 = "";
  let node = head;

  while (node !== null) {
    string1 = `${string1}${node.data}`;
    string2 = `${node.data}${string2}`;
    node = node.next;
  }

  return string1 === string2;
};

// usage

const list = new NodeList();

list.append(1);

list.append(2);

list.append(3);

list.append(2);

list.append(1);

console.log(isPallindrome(list.head)); // true
