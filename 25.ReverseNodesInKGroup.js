function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
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
 * @param {number} k
 * @return {ListNode}
 */

const reverseKGroup = (head, k) => {
  let copy = head;
  let current = head;
  let hashMap = {};

  while (head) {
    let iterant = 0;

    for (let i = 0; i < k; i++) {
      if (copy) {
        hashMap[k - i] = copy.val;
        copy = copy.next;
        iterant++;
      }
    }

    if (iterant !== k) return current;

    for (let i = 0; i < k; i++) {
      if (head) {
        head.val = hashMap[i + 1];
        head = head.next;
      }
    }
  }

  return current;
};

const node = makeNodes([1, 2, 3, 4, 5]);

console.log(reverseKGroup(node, 3));
