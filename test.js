class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

const removeKFromList = (l, k) => {
  let i = 0;
  let dummy = new ListNode();
  dummy.next = l;
  let current = dummy;
  while (current.next) {
    console.log(current, i++);
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// console.log(initial);
// const expected = convertArrayToList([1, 2, 4, 5]);
// console.log("наш готовый", removeKFromList(initial, 3));
removeKFromList(initial, 3);
