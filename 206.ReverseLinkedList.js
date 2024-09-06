function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
  let node = null;

  while (head) {
    node = new ListNode(head.val, node);
    head = head.next;
  }

  return node;
};
