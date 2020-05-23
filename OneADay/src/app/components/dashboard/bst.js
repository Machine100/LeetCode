class BST {
  constuctor(value) {
    this.root = new Node(value)
  }
}

class Node {
  constructor(value) {
    this.left = null 
    this.right = null 
    this.value = value
  }
}