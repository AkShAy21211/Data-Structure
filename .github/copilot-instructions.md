# Copilot Instructions for Data Structure Repository

## Project Overview
This is an **educational Data Structure & Algorithms reference repository** containing implementations, problems, and solutions across 15+ data structure categories (Arrays, BST, Graphs, LinkedLists, Stacks, Queues, Sorting, etc.) with JavaScript. It's a learning resource, not a production system.

## Architecture & Organization

### Directory Structure Pattern
Each major data structure has its own folder:
- **Core implementations**: Class-based structures (e.g., `Stack`, `BinarySearchTree`, `Graph`) with methods
- **Subfolders**: Problem categorizations like `Array/slidingWindow/`, `Array/twoPointer/`, `Linked List/Deletion and nsertion Problems/`
- **Problem files**: Named either as `p1.js`, `p2.js` or descriptive names like `longestSubStrWithUniqueCharacter.js`
- **Utility folders**: `sampleWorkouts/`, `Poblems/` (note: spelling variations exist), `Number/` for edge case problems

### No Strict Test Framework
- `package.json` declares `"test": "error: no test specified"` — there is no formal testing infrastructure
- Tests are ad-hoc: files run directly with `node filename.js` or contain `console.log()` examples
- Validation happens through manual execution and output inspection

## Code Patterns & Conventions

### Class-Based Data Structures
Always use ES6 classes with constructor, instance methods, and properties:
```javascript
// Example: BST structure pattern
class Node { constructor(value) { this.value = value; this.left = null; this.right = null; } }
class BinarySearchTree {
  constructor() { this.root = null; }
  isEmpty() { return this.root === null; }
  insert(value) { /* recursive helper pattern */ }
  inserNode(root, node) { /* recursive traversal */ }
}
```

### Functional Implementations
Algorithms often implemented as standalone functions with inline comments for complexity analysis:
```javascript
// Time Complexity: O(log n), Space: O(1)
function findKey(arr, key) { /* iterative binary search */ }
```

### Comment Style
- **Complexity annotations**: `// Time Complexity: O(n log n)` at top of function
- **Inline explanations**: Line-by-line comments on logic, especially in recursive algorithms
- **TODO comments**: Functions list anticipated improvements: `// valid parenthesis`, `// infix/postfix conversion`

### File Organization Within Folders
- `index.js` or `inexx.js` (note typo) = main implementation
- `demo.js` = working examples
- `p1.js`, `p2.js`, `p3.js` = problem variations
- `temp*.js` = scratch/experimental files (safe to ignore)

## Development Workflow

### Running Code
```bash
node path/to/file.js                 # Execute single file
node "Binary, linear Search/binarySearch.js"  # Note: spaces in folder names
```

### No Build Step
- No compilation, bundlers, or preprocessors
- Direct Node.js execution (requires Node.js installed)
- `readline-sync` is the only external dependency (for interactive input)

## Key Data Structure Patterns

### Sliding Window Problems (Arrays)
Located in `Array/slidingWindow/` — solve subarray problems efficiently:
- Pre-compute initial window sum, then slide with O(n) complexity
- Avoid nested loops; update sum by removing left element and adding right

### Two-Pointer Techniques (Arrays, Linked Lists)
Located in `Array/twoPointer/` and `Linked List/Two-Pointer - Comparison Problems/`:
- Use two pointers moving towards each other or same direction
- Common for: reversing, merging, detecting cycles

### Graph Traversal (DFS vs BFS)
`DFS And BFS/` folder shows both:
- **DFS**: Recursive or stack-based, explores depth first
- **BFS**: Queue-based level-by-level exploration
- Graph represented as adjacency list or object with connections

### Linked List Organization
Four problem categories in `Linked List/`:
1. **Traversal-Only**: Read-only operations
2. **Deletion and Insertion**: Modifying list structure
3. **Reversal**: Pointer reversal problems
4. **Two-Pointer**: Comparison and cycle detection

## Integration Points & Dependencies

### External Dependencies
- **readline-sync** (v1.4.10): For terminal input in interactive demos
- **Node.js**: Required runtime (no version pinned; assumes stable LTS)

### Cross-File Patterns
- **No imports/modules**: Files are standalone; structure reuse done through copy-paste or class definitions within file
- **No shared utilities**: Common patterns (swaps, comparisons) reimplemented per file
- **HTML visualization**: `pathfinding-visualizer.html` is separate visualization tool (not integrated with JS files)

## Common Pitfalls & Edge Cases

### Recursive Algorithms
- Always check **base case first** (e.g., `if (n === 1) return 1;` in factorial)
- Document **space complexity** of recursive call stack (e.g., O(log n) for binary search recursion)
- Use **Tail Call Optimization (TCO)** pattern where possible: `function(x - 1, accumulator)`

### Array Algorithms
- **Off-by-one errors**: Double-check loop bounds, especially in sliding window (`i < n`, `i = n`, `i < arr.length`)
- **Sorted vs unsorted**: Binary search requires sorted input; mention this in comments
- **Negative numbers**: Algorithms may need special handling (noted in file comments)

### Graph Implementations
- **Visited tracking**: Use Set or boolean array to prevent infinite loops in DFS/BFS
- **Undirected vs directed**: Default is directed; note if undirected in code comments

## When Adding New Code

1. **Pick the right folder**: Match existing data structure category; create subfolders for problem variants
2. **Use consistent naming**: `pX.js` for problems, `demo.js` for examples, class name matches concept
3. **Include complexity analysis**: Comment with Time and Space complexity at function definition
4. **Add inline examples**: Use `console.log()` to demonstrate usage
5. **Skip formal tests**: No test framework needed; manual execution is standard practice
6. **Document edge cases**: Comment on handling of negatives, duplicates, null inputs where relevant

## Questions to Ask When Uncertain

- **Are tests required?** No — this is a learning repository. Validation is through manual execution.
- **Which folder for this concept?** Check existing structure; if it's a variant of existing algorithm, add to that folder's subfolder.
- **Should I use classes or functions?** Classes for data structures (Stack, Queue, BST); functions for algorithms (sorting, searching).
- **Do I need to handle edge cases?** Yes — document assumptions and mention limitations in comments.
