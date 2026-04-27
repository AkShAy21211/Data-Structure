const { NodeList, Node } = require("./index");

// creaate two different lists

const list1 = new NodeList();
list1.append(1);
list1.append(2);
list1.append(3);

const list2 = new NodeList();

list2.append(4);
list2.append(5);
list2.append(3);

1; // IRRESPECTIVE OF THE ORDER OF ELEMENTS
function merge(list1, list2) {
  if (!list1.head) return list2;
  if (!list2.head) return list1;

  let current = list1.head;

  while (current.next) {
    current = current.next;
  }

  current.next = list2.head;

  return list1.display();
}

console.log(merge(list1, list2));

// WITH SORTED VALUES

 function mergeSortedLists(list1, list2) {
    let dummy = new Node(0); // Create a dummy node to start the merged list
    let current = dummy;

    let p1 = list1.head;
    let p2 = list2.head;

    // Traverse both lists and insert nodes in sorted order
    while (p1 && p2) {
      if (p1.value < p2.value) {
        current.next = p1;
        p1 = p1.next;
      } else {
        current.next = p2;
        p2 = p2.next;
      }
      current = current.next; // Move the current pointer to the next node
    }

    // If there are any nodes left in either list, append them
    if (p1) current.next = p1;
    if (p2) current.next = p2;

    return current.next
}


console.log(mergeSortedLists(list1, list2));