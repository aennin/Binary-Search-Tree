import { Tree } from "./tree.js";
import { Node } from "./tree.js";

// === Driver Script ===

// Helper: generate random array of numbers < 100
function randomArray(size = 10) {
    return Array.from({length: size}, () => Math.floor(Math.random() * 100))
}

// Create a tree from random numbers
let tree = new Tree(randomArray(15));

console.log("Is the tree balanced?", tree.isBalanced());

// Print traversals
console.log("Level Order:");
tree.levelOrderForEach(node => console.log(node.data));

console.log("Pre Order:");
tree.preOrderForEach(node => console.log(node.data));

console.log("Post Order:");
tree.postOrderForEach(node => console.log(node.data));

console.log("In Order:");
tree.inOrderForEach(node => console.log(node.data));

// --- Unbalanced the tree ---
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(400);

console.log("Is the tree balanced after unbalancing?", tree.isBalanced());

// --- Rebalance the tree ---
tree.rebalance();


console.log("Is the tree balanced after rebalancing?", tree.isBalanced());

// Print traversals again
console.log("Level Order (after rebalance):");
tree.levelOrderForEach(node => console.log(node.data));

console.log("Pre Order (after rebalance):");
tree.preOrderForEach(node => console.log(node.data));

console.log("Post Order (after rebalance):");
tree.postOrderForEach(node => console.log(node.data));

console.log("In Order (after rebalance):");
tree.inOrderForEach(node => console.log(node.data));