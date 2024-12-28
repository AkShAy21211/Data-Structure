function removeOdd(head) {
    // Remove odd values from the beginning of the list
    while (head !== null && head.value % 2 !== 0) {
        head = head.next; // Move head to the next node
    }
    
    let current = head;
    
    // Traverse the list
    while (current !== null && current.next !== null) {
        if (current.next.value % 2 !== 0) {
            // Skip the next node with an odd value
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }
    
    return head; // Return the new head of the list
}
