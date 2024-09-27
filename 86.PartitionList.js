const { makeNodes, ListNode } = require("./utils/LinkedList");

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const partition = (head, x) => {
  let left = new ListNode(0);
  let right = new ListNode(0);

  let currentLeft = left;
  let currentRight = right;

  while (head) {
    if (head.val < x) {
      left.next = new ListNode(head.val);
      left = left.next;
    } else if (head.val >= x) {
      right.next = new ListNode(head.val);
      right = right.next;
    }

    head = head.next;
  }

  left.next = currentRight.next;
  left = left.next;

  return currentLeft.next;
};

const node = makeNodes([1, 4, 3, 2, 5, 2]);

console.log(partition(node, 3));
