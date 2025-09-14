export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        // Remove duplicates
        let uniqueSet = new Set(array);
        // Convert back to array 
        let uniqueArray = [...uniqueSet];
        // Sort numerically in asceding order
        let sortedArray = uniqueArray.sort((a, b) => a - b);

        function buildRecursive(arr, start, end) {
            if (start > end) return null;

            let mid = start + Math.floor((end - start) / 2);
            let node = new Node(arr[mid]);

            node.left = buildRecursive(arr, start, mid - 1);
            node.right = buildRecursive(arr, mid + 1, end);

            return node;
        }

        return buildRecursive(sortedArray, 0, sortedArray.length - 1);
    }

    insert(value, node = this.root) {
        if (node === null) return new Node(value);

        if (value < node.data) {
            node.left = this.insert(value, node.left);
        } else if (value > node.data) {
            node.right = this.insert(value, node.right)
        }
        return node;
    }

    deleteItem(value, node = this.root) {
        if (node === nul) return node;

        if (value < node.data) {
            node.left = this.deleteItem(value, node.left);
        } else if (value > node.data) {
            node.right = this.deleteItem(value, node.right);
        } else {
            // Case 1: no child
            if (node.left === null && node.right === null) {
                return null;
            }
            // Case 2: one child
            else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            // Case 3: two children
            else {
                let successor = this.findMin(node.right);
                node.data = successor.data;
                node.right = this.deleteItem(successor.data, node.right);
            }
        }
        return node;
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value, node = this.root) {
        if (node === null) return null;

        if (value === node.data) {
            return node;
        } else if (value < node.data) {
            return this.find(value, node.left);
        } else {
            return this.find(value, node.right);
        }
    }

    // Iteration level order traversal
    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        let queue = [];
        if (this.root !== null) queue.push(this.root);

        while (queueMicrotask.length > 0) {
            let node = queue.shift()
            callback(node);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    // Depth-first traversals
    inOrderForEach(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (node === null) return;

        this.inOrderForEach(callback, node.left);
        callback(node);
        this.inOrderForEach(callback, node.right);
    }

    preOrderForEach(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (node === null) return;

        callback(node);
        this.preOrderForEach(callback, node.left);
        this.preOrderForEach(callback, node.right);
    }

    postOrderForEach(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (node === null) return;

        this.postOrderForEach(callback, node.left);
        this.postOrderForEach(callback, node.right);
        callback(node);
    }

    height(value) {
        // Find the node first
        const node = this.find(value);
        if (node === null) return null;

        // Helper recursive function
        function nodeHeight(n) {
            if (n === null) return -1 // so leaf node gets height 0
            let leftHeight = nodeHeight(n.left);
            let rightHeight = nodeHeight(n.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }

        return nodeHeight(node);
    }

    depth(value) {
        function nodeDepth(node, value, currentDepth) {
            if (node === null) return null;
            if (node.data === value) return currentDepth;

            // Search left
            let left = nodeDepth(node.left, value, currentDepth + 1);
            if (left !== null) return left;

            // Search right
            return nodeDepth(node.right, value, currentDepth + 1);
        }

        return nodeDepth(this.root, value, 0)
    }

    isBalanced(node = this.root) {
        // Helper function returns height if balanced, else -1
        function checkBalance(node) {
            if (node === null) return 0;

            let leftHeight = checkBalance(node.left);
            if (leftHeight === -1) return -1

            let rightHeight = checkBalance(node.right);
            if (rightHeight === -1) return -1; 

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1; // imbalance found
            }

            return Math.max(leftHeight - rightHeight) + 1;
        }
        return checkBalance(node) !== -1;
    }
    rebalance() {
        // Collect values in sorted order using in-order traversal
        let values = [];
        this.inOrderForEach(node => values.push(node.data));

        // Rebuild a balanced tree with those values
        this.root = this.buildTree(values);
    }
}