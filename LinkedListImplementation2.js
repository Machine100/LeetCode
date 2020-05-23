class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldTail = this.tail     // Pass by reference because  ** are nodes not primitive variables **
            this.tail = new Node(value)
            this.tail.previous = oldTail
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let oldHead = this.head
            this.head = new Node(value)
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
}

class Node {
    constructor(value, previous, next) {
        this.previous = previous || null
        this.next = next || null
        this.value = value
    }
}

let list = new LinkedList
list.append(7)
list.append(6)
list.append(4)
console.log(list)
console.log(list.deleteHead())
console.log(list)