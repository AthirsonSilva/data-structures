const hash = (string, max) => {
    let hash = 0

    for(let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
    }

    return hash % max
}

class HashTable {
    constructor() {
        this.storage = Array()
        this.storageLimit = 4
    }

    getStorage = () => {
        this.storage.forEach(item => console.table(item))
        
        return this.storage
    }

    // adds a item to the hash table
    add = (key, value) => {
        let index = hash(key, this.storageLimit) 

        if (!this.storage[index]) {
            this.storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false

            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;

                    inserted = true
                }
            }

            if (inserted === false) {
                this.storage[index].push([key, value])
            }
        }
    }

    remove = (key) => {
        let index = hash(key, this.storageLimit)

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] == key) {
                    delete this.storage[index][i]
                }
            }
        }
    }

    lookup = (key) => {
        let index = hash(key, this.storageLimit)

        if (!this.storage[index]) {
            return undefined
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }

    update = (key, value) => {
        let index = hash(key, this.storageLimit)

        for (let i = 0; i < this.storage[index]; i++) {
            if (this.storage[index][0][0] === key) {
                this.storage[index][i][1] = value

                return this.storage[index][i][1]
            } 
        }
    }
}

const ht = new HashTable()
ht.add('azilzu', 'person')
ht.add('rex', 'dinosaur')

ht.getStorage()
console.log(ht.lookup('rex'))
console.log(ht.update('azilzu', 'boy'))
