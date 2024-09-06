// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val,
// and return the new head.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  let node = new ListNode(0);
  let current = node;

  while (head) {
    if (head.val === val) {
      head = head.next;
      continue;
    }

    node.next = new ListNode(head.val);
    node = node.next;
    head = head.next;
  }

  return current.next;
};
