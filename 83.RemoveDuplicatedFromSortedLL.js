/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let hashMap = {};
  let node = new ListNode(0);
  let current = node;

  while (head) {
    if (!hashMap[head.val]) {
      hashMap[head.val] = 1;
      node.next = new ListNode(head.val);
      node = node.next;
    } else {
      hashMap[head.val] += 1;
    }
    head = head.next;
  }

  return current.next;
};
