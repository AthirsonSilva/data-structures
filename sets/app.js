class mySet {
    constructor() {
        // the let collection will hold the set
        this.collection = Array()

        // this method will check for the presence of an element and return true or false
        this.has = (element) => {
            return (this.collection.indexOf(element) !== -1)
        }
    
        // this method will return all the values in the set
        this.values = () => {
            return this.collection
        }
    
        //this method will add an element to the set
        this.add = (element) => {
            if (!this.has(element)) {
                this.collection.push(element)
                return true
            }
    
            return false
        }
    
        // this method will remove an element from a set
        this.remove = (element) => {
            if(this.has(element)) {
                index = this.collection.indexOf(element)
                this.collection.splice(index, 1)
    
                return true
            }
    
            return false
        }
    
        // this method will return the size of the collection
        this.size = () => {
            return this.collection.length
        }

        // this method will return the union of two sets
        this.union = (otherSet) => {
            // create a new set
            let unionSet = new mySet()

            // add all the values from the first set
            let firstSet = this.values()

            // adds the second set values
            let secondSet = otherSet.values()

            firstSet.forEach(e => unionSet.add(e))
            secondSet .forEach(e => unionSet.add(e))

            return unionSet
        }

        // this method will return the intersection of two set as a new set
        this.intersection = (otherSet) => {
            // create a new set
            let intersectionSet = new mySet()

            let firstSet = this.values()

            firstSet.forEach(e => {
                if(otherSet.has(e)) {
                    intersectionSet.add(e)
                }
            })

            return intersectionSet
        }

        // this method will return the difference between the tow set as a new set
        this.diference = (otherSet) => {
            // creates a new set
            let differenceSet = new mySet()

            let firstSet = this.values()

            firstSet.forEach(e => {
                if(!otherSet.has(e)) {
                    differenceSet.add(e)
                }
            })

            return differenceSet
        }

        // this method will test if the set is a subset of a diffrente set
        this.subset = (otherSet) => {
            let firstSet = this.values()

            return firstSet.every(value => {
                return otherSet.has(value)
            })
        }
    }
}

// Language: javascript
// Path: sets/app.js

const setA = new mySet()
const setB = new mySet()

for (let i = 0; i < 5; i++) {
    setA.add(i)
}

for (let i = 0; i < 8; i++) {
    setB.add(i)
}

console.table(setA.values())
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())


const setC = new Set()
const setD = new Set()

for (let i = 0; i < 5; i++) {
    setC.add(i)
}

for (let i = 0; i < 8; i++) {
    setD.add(i)
}

console.table(setC.values())
setC.forEach(e => console.log(e))


