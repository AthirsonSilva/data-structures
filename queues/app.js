class Queue {
    constructor() {
        this.collection = Array()
    }

    // returns all values inside the queue
    values = () => {
        return this.collection
    }

    // this method adds a value to the end of the queue
    enqueue = (element) => {
        this.collection.push(element)
    }

    // this method removes an item from the queue
    dequeue = () => {
        return this.collection.shift()
    }

    // this method returns the first item of the queue
    front = () => {
        return this.collection[0]
    }

    // this method returns the last item of the queue
    rear = () => {
        return this.collection[-1]
    }

    // this method returns the size of the queue
    size = () => {
        return this.collection.length
    }

    // this method checks if the queue is empty
    isEmpty = () => {
        return (this.collection.length === 0)
    }
}

class PriorityQueue {
    constructor() {
        this.collection = Array()
    }

    // this method returns all element in the collection
    getCollection = () => {
        return this.collection
    }

    // this method adds a new element to the end of the queue
    enqueue = (element) => {
        if (this.isEmpty()) {
            this.collection.push(element)
        } else {
            let added = false

            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) { // checking priorities
                    this.collection.splice(i, 0, element)
                    added = true

                    break
                }
            }

            if (!added) {
                this.collection.push(element)
            }
        }
    }

    // this method removes the first element from the queue
    dequeue = () => {
        let value = this.collection.shift()
        return value[0]
    }
    
    // this method returns the first element from the queue
    front = () => {
        return this.collection[0]
    }

    // this method returns the last element from the queue
    rear = () => {
        return this.collection[-1]
    }

    // this method return the size of the queue
    size = () => {
        return this.collection.length()
    }

    // this method checks if the collection is empty
    isEmpty = () => {
        return (this.collection.length === 0)
    }
}

const standardQueue = () => {
    const q = new Queue()
    q.enqueue('a')
    q.enqueue('b')
    q.enqueue('c')
    console.table(q.values())
    q.front()
    q.rear()
    q.dequeue()
    console.table(q.values())
}

const priorityQueue = () => {
    const pq = new PriorityQueue() 
    pq.enqueue(['Priority: 2', 2])
    pq.enqueue(['Priority: 4', 4])
    pq.enqueue(['Priority: 1', 1])
    pq.enqueue(['Priority: 4', 4])
    console.table(pq.getCollection())
    pq.dequeue()
    pq.front()
    pq.rear()
    console.table(pq.getCollection())
}

priorityQueue()
