// class LinkedList {
//     constructor() {
//         this.head: LLNode = null
//         this.tail: LLNode = null
//     }

//     append(value: number) {
//         if (!this.tail) {
//             this.tail = new Node(value)
//         }
//         else {
            
//         }
//     }
// }
// }


class LLLNode {
    previous: Node
    next: Node
    value: number

    constructor(value: number, previous: Node, next:Node) {
        this.previous = previous || null
        this.next = next || null
        this.value = value
    }
}