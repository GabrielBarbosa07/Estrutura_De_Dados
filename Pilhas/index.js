class Stack {
    constructor() {
        this.items = {}
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0
    }

}