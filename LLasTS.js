var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (value) {
        if (!this.tail) {
            this.head = this.tail = new LLNode(value);
        }
        else {
            var oldTail = this.tail; // Pass by reference because  ** are nodes not primitive variables **
            this.tail = new LLNode(value);
            this.tail.previous = oldTail;
            oldTail.next = this.tail;
        }
    };
    LinkedList.prototype.prepend = function (value) {
        if (!this.head) {
            this.head = this.tail = new LLNode(value);
        }
        else {
            var oldHead = this.head;
            this.head = new LLNode(value);
            this.head.next = oldHead;
            oldHead.previous = this.head;
        }
    };
    LinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        else {
            var removedHead = this.head.value;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.previous = null;
            }
            return removedHead;
        }
    };
    LinkedList.prototype.searchFor = function (value) {
        if (this.tail.value === value) {
            return true;
        }
        var currentNode = this.head;
        if (currentNode.value === value) {
            return true;
        }
        while (currentNode.next) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    return LinkedList;
}());
var LLNode = /** @class */ (function () {
    function LLNode(value, previous, next) {
        this.previous = previous || null;
        this.next = next || null;
        this.value = value;
    }
    return LLNode;
}());
var list = new LinkedList;
list.append(1);
list.append(3);
list.append(5);
list.append(7);
list.append(9);
list.append(2);
list.append(4);
list.append(6);
console.log(list);
console.log(list.deleteHead());
console.log(list);
console.log(list.searchFor(6));
