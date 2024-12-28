function removeElements(head, val) {
  let dummy = { next: head }; // Create a dummy node to handle edge cases like removing the head
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next; // Skip the node with the given value
    } else {
      current = current.next; // Move to the next node
    }
  }

  return dummy.next; // Return the new head (which may have changed)
}
