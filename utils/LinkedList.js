function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number[]} list
 * @return {ListNode}
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

module.exports = {
  ListNode,
  makeNodes,
};
