// Question: How do you insert a node at the end of a circular linked list?

function insertEnd(head, value) {
  const newNode = {
    value,
    next: null,
  };

  if (!head) {
    newNode.next = newNode;
    return newNode;
  }

  let current = head;

  while (current !== head) {
    current = current.next;
  }
  current.next = newNode;
  newNode.next = head;

  return head;
}
