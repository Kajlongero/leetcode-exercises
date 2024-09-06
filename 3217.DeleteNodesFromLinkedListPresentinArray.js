/* You are given an array of integers "nums" and the "head" of a linked list. 
   Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists 
   in "nums".
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteNode = (nums, head) => {
  const set = new Set(nums);
  let node = new ListNode(0);
  let current = node;

  while (head) {
    while (set.has(head.val)) {
      head = head.next;
    }

    node.next = head;
    node = node.next;
    head = head.next;
  }

  return current.next;
};
