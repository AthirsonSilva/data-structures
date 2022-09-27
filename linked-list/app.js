class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.Node = (element) => {
            this.element = element
            this.next = null
        }
    }

    getSize = () => {
        return this.length
    }

    getHead = () => {
        return this.head
    }

    add = (element) => {
        let node = new this.Node(element)

        if (!this.head) {
            this.head = node
        } else {
            let currentNode = this.head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        this.lenght++
    }

    remove = (element) => {
        let currentNode = this.head
        let previousNode

        if (currentNode.element === element) {
            this.head = currentNode.next
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
            }

            previousNode.next = currentNode.next
        }

        this.length--
    }

    isEmpty = () => {
        return this.length === 0
    }

    indexOf = (element) => {
        let currentNode = head
        let index = -1

        while (currentNode) {
            index++
            if (currentNode.element === element) {
                return index
            }

            currentNode = currentNode.next
        }

        return -1
    } 

    elementAt = (index) => {
        let currentNode = this.head
        let count = 0

        while (count < index) {
            count++
            currentNode = currentNode.next
        }

        return currentNode.element
    }

    
}