function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 *
 * @param {number[]} list
 * @returns {ListNode}
 */

const makeNodes = (list = []) => {
  let node = new ListNode(0);
  let current = node;

  for (let i = 0; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }

  return current.next;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNode = (head, n) => {
  let node = new ListNode(0);
  let dummy = head;
  let current = node;

  let i = 1;

  while (head) {
    if (i < n) {
      i++;
      head = head.next;
      continue;
    }

    if (!head.next) {
      node.next = dummy.next
        ? new ListNode(dummy.next?.val, dummy.next?.next)
        : null;
    } else {
      node.next = new ListNode(dummy.val, dummy.next);
    }

    node = node.next;
    dummy = dummy.next;
    head = head.next;
  }

  return current.next;
};
