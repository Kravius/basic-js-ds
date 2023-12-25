class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.roots = null;
  }
  root() {
    return this.roots;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.roots) {
      this.roots = newNode;
      return;
    }
    let currentNode = this.roots;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (!this.roots) {
      return false;
    }
    let currentNode = this.roots;
    let flag = false;
    while (currentNode) {
      console.log(currentNode.data);
      if (currentNode.data === data) {
        return true;
      } else {
        if (currentNode.data > data) {
          currentNode = currentNode.left;
        } else currentNode = currentNode.right;
      }
    }
    return flag;
  }

  find(data) {
    if (!this.roots) {
      return null;
    }
    let currentNode = this.roots;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else {
        if (currentNode.data > data) {
          currentNode = currentNode.left;
        } else currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.roots = this.removeNode(this.roots, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const minRight = this.findMinNode(node.right);
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
      return node;
    }
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let currentNode = this.roots;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.roots) {
      return null;
    }
    let currentNode = this.roots;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(1);
tree.add(3);
// tree.add(0);
tree.add(4);

// console.log(tree.root().data);
console.log(tree.has(0));
// console.log(tree.max());
