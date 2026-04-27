
const  list  = require("./index.js");


function reverse(lists) {

  if (lists.isEmpty()) return lists;

  let current = lists.head;
  let prev = null;

  while (current) {

    let next = current.next;
    current.next = prev;
    prev = current;
    current = next
  }

  list.head = prev;;

}

// create an array with 10 elements
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// create a linked list from the array

array.forEach(ele=>list.append(ele));


// print the original linked list

console.log(list.display());

reverse(list)

console.log(list.display());
