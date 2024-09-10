function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const makeNodes = (list = []) => {
  let node = new ListNode(0);
  let current = node;

  for (let i = 0; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }

  return current.next;
};

const calculateGCD = (val1, val2) => {
  if (val2 === 0) {
    return val1;
  }
  return calculateGCD(val2, val1 % val2);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const insertGreatestCommonDivisors = (head) => {
  if (!head.next) return head;

  let node = new ListNode(head.val);
  let current = node;

  while (head) {
    if (head && !head.next) {
      head = head.next;
      continue;
    }
    let mcm = calculateGCD(head.val, head.next?.val);

    node.next = new ListNode(mcm, new ListNode(head.next.val));
    node = node.next.next;
    head = head.next;
  }

  return current;
};
