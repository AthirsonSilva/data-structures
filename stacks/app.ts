let letter = Array()

let word = 'racecar'
let rword = ''

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letter.push(word[i])
}
console.table(letter)

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letter.pop()
}
console.table(letter)

if (rword === word) {
    console.log(word + ' is a palindrome.')
} else {
    console.log(word + ' is not a palindrome.')
}


// Language: javascript
// Path: stacks/app.js
class Stack {
    constructor() {
        this.count = 0
        this.storage = Object()

        // Adds a value onto the end of the stack
        this.push = (value) => {
            // adds the value to the end of the stack
            this.storage[this.count] = value
            this.count++
        }
        console.table(this.storage)

        // removes and return a value from the end of the stack
        this.pop = () => {
            // check if the stack is empty
            if (this.count === 0) {
                return undefined
            }

            this.count--
            // removes the value from the end of the stack
            let result = this.storage[this.count]
            delete this.storage[this.count]

            return result
        }

        this.size = () => {
            return this.count
        }

        // returns the value at the end of the stack
        this.peek = () => {
            return this.storage[this.count - 1]
        }
    }
}

let myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.table(myStack.peek())
console.table(myStack.pop())
console.table(myStack.peek())
myStack.push('freeCodeCamp')
console.table(myStack.peek())
