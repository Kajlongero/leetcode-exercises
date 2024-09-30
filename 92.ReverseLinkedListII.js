const { makeNodes, ListNode } = require("./utils/LinkedList");

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  let leftSteps = 1;
  let rightSteps = 1;

  let fast = head;
  let slow = head;

  while (leftSteps < left - 1 || rightSteps < right) {
    if (leftSteps < left - 1) {
      leftSteps++;
      slow = slow.next;
    }
    if (rightSteps < right) {
      rightSteps++;
      fast = fast.next;
    }
  }

  let node = fast.next;
  let copy = left === 1 ? slow : slow.next;

  for (let i = 0; i <= right - left; i++) {
    node = new ListNode(copy.val, node);
    copy = copy.next;
  }

  if (left === 1) return node;

  slow.next = node;

  return head;
};

console.log(reverseBetween(makeNodes([1, 2, 3, 4]), 3, 4));
