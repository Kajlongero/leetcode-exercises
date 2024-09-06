function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  let node = new ListNode(0);
  let current = node;

  let count = 1;

  while (head) {
    if ((count + 1) % 2 === 0 && head?.next) {
      node.next = new ListNode(head.next.val, new ListNode(head.val));
      node = node.next.next;
      head = head.next.next;
      count += 2;
    } else if (!head?.next) {
      node.next = new ListNode(head.val);
      node = node.next;
      count += 1;
      break;
    }
  }

  return current.next;
};

console.log(
  swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
);
