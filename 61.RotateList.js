function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const rotate = (head, k) => {
  let left = new ListNode(0);
  let right = new ListNode(0);
  let currentLeft = left;
  let currentRight = right;

  let dummy = head;
  let n = 0;

  while (dummy) {
    dummy = dummy.next;
    n++;
  }

  const x = k % n;
  if (x === 0) return head;

  let i = 0;

  while (head) {
    if (i < n - x) {
      left.next = new ListNode(head.val);
      left = left.next;
    } else {
      right.next = new ListNode(head.val);
      right = right.next;
    }
    i++;
    head = head.next;
  }
  right.next = currentLeft.next;

  return currentRight.next;
};

const node = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(rotate(node, 5));
