function arrayToLinkedList(arr) {
  let head = null,
    current = null;
  for (let val of arr) {
    let node = new Node(val);
    if (!head) {
      head = node;
      current = node;
    } else {
      current.next = node;
      current = node;
    }
  }
  return head;
}
