# linked list interview problems by pattern
---

## 1️⃣ Traversal-Only Problems (Read-Only List)

**Goal:** Prove you can move through a list safely.

**What interviewers test:**
- Loop control
- Null handling
- Basic pointer movement

### Must-Do Problems
- Linked List Cycle
- Middle of the Linked List
- Convert Linked List to Array / Print Elements

### Core Template
```js
let current = head;
while (current) {
  // read-only operation
  current = current.next;
}
```

---

## 2️⃣ Deletion / Insertion Problems

**Goal:** Show you understand pointer rewiring.

**What interviewers test:**
- Safe deletion
- Head edge cases
- Understanding of `previous -> current` relationship

### Must-Do Problems
- Remove Linked List Elements
- Remove Nth Node From End
- Delete Node in a Linked List (given node reference)

### Core Template (Dummy Node Pattern)
```js
const dummy = new ListNode(0);
dummy.next = head;
let current = dummy;

while (current.next) {
  if (condition) {
    current.next = current.next.next; // rewire
  } else {
    current = current.next;
  }
}
```

---

## 3️⃣ Reversal Problems (Most Important)

**Goal:** Reverse pointer direction safely.

**What interviewers test:**
- Pointer safety
- Sequencing of operations
- Confidence with state transitions

### Must-Do Problems
- Reverse Linked List
- Reverse Linked List II (between positions)
- Reverse Nodes in K-Group (optional, advanced)

### Core Template (Three-Pointer Technique)
```js
let prev = null;
let current = head;

while (current) {
  let next = current.next;   // save
  current.next = prev;       // reverse
  prev = current;            // move prev
  current = next;            // move current
}

return prev; // new head
```

---

## 4️⃣ Two-Pointer / Comparison Problems

**Goal:** Demonstrate reasoning with coordinated pointers.

**What interviewers test:**
- Ability to reason about speed and position
- Detecting cycles or intersections

### Must-Do Problems
- Palindrome Linked List
- Intersection of Two Linked Lists
- Linked List Cycle II

### Core Template (Fast & Slow Pointers)
```js
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
```

---

# Common Linked List Theory Questions (Interview Q&A)

### Q1. Why is a dummy node used in linked list problems?
A dummy node simplifies edge cases, especially when the head node might be removed or modified. It ensures every node has a previous pointer.

### Q2. Why can’t we delete the current node directly?
In a singly linked list, a node does not know its previous node. Deletion requires modifying the `next` pointer of the previous node.

### Q3. Why is reversing a linked list tricky?
Because changing `current.next` can cause loss of access to the remaining list unless the next node is saved beforehand.

### Q4. What is the time complexity of most linked list problems?
Most linked list problems run in **O(n)** time because each node is visited once.

### Q5. Why is space complexity often O(1)?
Because pointer-based solutions reuse existing nodes and do not allocate extra data structures.

### Q6. When should recursion be avoided in linked list problems?
Recursion should be avoided for very long lists due to stack overflow risk and increased space complexity.

---

## Interview Tip (Very Important)

Before writing code, always ask:
1. Which **category** does this problem belong to?
2. Which **template** applies?
3. What pointer am I allowed to modify?

If you answer these three questions, the solution becomes mechanical, not creative.

