class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BinaryTreeSearch {
    constructor() {
        this.root = null
    }

    // adds a new node to the binary tree
    add = (data) => {
        const node = this.root

        // if the root is null, then the tree is empty
        if (node === null) {
            this.root = new Node(data)
            return 
        } else { // if the root is not null, then the tree is not empty
            // create a recursive function to traverse the tree
            const searchTree = (node) => {
                // if the data is less than the node's data, then move left
                if (data < node.data) {
                    // if the left is null, then append the new node
                    if (node.left === null) {
                        node.left = new Node(data)
                        return
                    } else if (node.left !== null) { // if the left is not null, then move left again
                        return searchTree(node.left)
                    }
                } else if (data > node.data) { // if the data is greater than the node's data, then move right
                    // if the right is null, then append the new node
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    } else if (node.right !== null) { // if the right node is not null, the move right again
                        return searchTree(node.right)
                    } 
                } else { // if the data is equal to the node's data, then return null
                    return null
                } 
            }
            // invoke the recursive function
            return searchTree(node)
        }
    }

    // finds the minimum value in the binary tree
    findMin = () => {
        let current = this.root

        // traverse the tree to the left
        while (current.left !== null) {
            current = current.left
        }

        return current.data
    }

    // finds the maximum value in the binary tree
    findMax = () => {
        let current = this.root 

        // traverse the tree to the right
        while (current.right !== null) {
            current = current.right
        }

        return current.data
    }

    // finds a specific value in the binary tree
    find = (data) => {
        let current = this.root

        // traver the tree
        while (current.data !== data) {
            // if the data is not found, then return null
            if (current === null) {
                return null
            }

            // if the data is less than the current node's data, then move left. Otherwise, move right
            current = current.data < data ? current.right : current.left
        }
        return current.data
    }

    // checks if the binary tree is present
    isPresent = (data) => {
        let current = this.root

        // traverse the tree
        while (current) {
            // if the data equals the current node's data, then return true
            if (data === current.data) {
                return true
            }

            // if the data is greater than the current node's data, then move right. Otherwise, move left
            current = current.data < data ? current.right : current.left
        }
    }

    // removes a node from the binary tree
    remove = (data) => {
        let current = this.root

        // recursively traverse the tree
        const removeNode = (node, data) => {
            // if the node is null, then return null
            if (node == null) {
                return null
            }

            // if the data is less than the node's data, then move left
            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null
                }

                // node has no left child
                if (node.left == null) {
                    return node.right
                }

                // node has no right child
                if (node.right == null) {
                    return node.left
                }

                // node has two children
                let tempNode = node.right

                // find the minimum node from the right subtree
                while (tempNode.left !== null) {
                    // traverse the tree to the left
                    tempNode = tempNode.left
                }

                // replace the node's data with the minimum node's data
                node.data = tempNode.data

                // remove the minimum node
                node.righ = removeNode(node.right, tempNode.data)
                return node

            } else if (data < node.data) { // if the data is less than the node's data, then move left
                node.left = removeNode(node.left, data)
                return node
            } else { // if the data is greater than the node's data, then move right
                node.right = removeNode(node.right, data)
            }
            
            this.root = removeNode(this.root, data)
        }
    }
}

const bst = new BinaryTreeSearch()

for (let i = 0; i < 10; i++) {
    bst.add(i)
}

bst.remove(10)

console.table(bst.findMin())
console.table(bst.findMax())
console.table(bst.findMax())
console.table(bst.isPresent(4))
console.table(bst.root)