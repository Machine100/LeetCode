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
    constructor(value, previous, next) {
        this.previous = previous || null;
        this.next = next || null;
        this.value = value;
    }
}
//# sourceMappingURL=LinkedListImplementation.js.map