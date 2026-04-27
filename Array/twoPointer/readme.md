# Two-Pointer Technique

The **Two-Pointer** pattern involves using two indices (pointers) to iterate through a data structure, typically an array or a linked list. This approach is often used to save time and space.

## Common Variations

1.  **Opposite Directions**: One pointer starts at the beginning (`left`) and the other at the end (`right`). They move toward each other.
    - _Example_: Two Sum (Sorted), Reversing an array, Valid Palindrome.
2.  **Same Direction (Fast & Slow)**: Both pointers start at the beginning, but move at different speeds or intervals.
    - _Example_: Remove Duplicates, Detecting cycles in a Linked List, Finding the middle element.

## Why use it?

- **Efficiency**: Reduces nested loops (from $O(n^2)$ to $O(n)$).
- **In-place**: Often allows modifying the array without extra space ($O(1)$ space complexity).

## Problems in this folder

- `p1.js`: Two Sum II (Sorted Array)
- `p2.js`: Remove Duplicates from Sorted Array
