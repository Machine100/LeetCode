class LinkedList {
    head: LLNode
    tail: LLNode
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value: number) {
        if (!this.tail) {
            this.head = this.tail = new LLNode(value)
        }
        else {
            let oldTail = this.tail     // Pass by reference because  ** are nodes not primitive variables **
            this.tail = new LLNode(value)
            this.tail.previous = oldTail
            oldTail.next = this.tail
        }
    }

    prepend(value: number) {
        if (!this.head) {
            this.head = this.tail = new LLNode(value)
        }
        else {
            let oldHead = this.head
            this.head = new LLNode(value)
            this.head.next = oldHead
            oldHead.previous = this.head
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        else {
            let removedHead = this.head.value
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            else {
                this.head = this.head.next
                this.head.previous = null 
            }
            return removedHead
        }
    }

    searchFor(value: number) {
        if (this.tail.value === value) {
            return true
        }
        let currentNode: LLNode = this.head
        if (currentNode.value === value) {
            return true
        }
        while (currentNode.next) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }
}

class LLNode {
    previous: LLNode
    next: LLNode
    value: number
    constructor(value: number, previous?: LLNode, next?: LLNode) {
        this.previous = previous || null
        this.next = next || null
        this.value = value
    }
}

let list = new LinkedList
list.append(1)
list.append(3)
list.append(5)
list.append(7)
list.append(9)
list.append(2)
list.append(4)
list.append(6)
console.log(list)
console.log(list.deleteHead())
console.log(list)
console.log(list.searchFor(6))