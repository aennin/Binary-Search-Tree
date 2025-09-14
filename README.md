# Binary Search Tree Project
This project implements a Binary Search Tree (BST) in JavaScript with full functionality, including insertion, deletion, traversal, balance checking, and rebalancing.

## Features
- insert(value) → Insert a node
- deleteItem(value) → Delete a node
- find(value) → Find and return a node
- levelOrderForEach(callback) → Traverse in breadth-first order
- inOrderForEach(callback) → Traverse in in-order
- preOrderForEach(callback) → Traverse in pre-order
- postOrderForEach(callback) → Traverse in post-order
- height(value) → Get height of a node
- depth(value) → Get depth of a node
- isBalanced() → Check if the tree is balanced
- rebalance() → Rebalance the tree

## Driver Script
The driver script demonstrates:
1. Creating a BST from random numbers < 100.
2. Confirming balance with isBalanced().
3. Printing traversals (level, pre, post, in).
4. Unbalancing the tree by adding numbers > 100.
5. Confirming imbalance.
6. Rebalancing the tree.
7. Printing traversals again.

## Usage
Clone this repository and run the driver script:
```bash
node main.js
```

## File Structure
```bash
├── tree.js    # Contains Node and Tree classes
├── main.js    # Driver script with demo
├── README.md  # Project documentation
```