function reverseStack(stack) {
    if (stack.length === 0) return;
    
    const top = stack.pop(); // Remove the top element
    
    reverseStack(stack); // Recurse to reverse the remaining stack
    
    insertAtBottom(stack, top); // Insert the top element at the bottom
}

function insertAtBottom(stack, value) {
    if (stack.length === 0) {
        stack.push(value); // If stack is empty, just push the element
    } else {
        const top = stack.pop(); // Pop the top element
        insertAtBottom(stack, value); // Recurse
        stack.push(top); // Push the popped element back on top
    }
}

// Example usage
const stack = [1, 2, 3, 4];
reverseStack(stack);
console.log(stack); // [4, 3, 2, 1]
