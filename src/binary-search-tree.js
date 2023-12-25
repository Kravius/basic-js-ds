const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

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
    return false;
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
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.data = this.findMin(node.right).data;
      node.right = this.removeNode(node.right, node.data);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
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

module.exports = {
  BinarySearchTree,
};
