/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicated = (head) => {
  let node = new ListNode(0);
  let current = node;
  let actualNode = head;

  let times = 0;

  while (head) {
    if (actualNode.val !== head.val) {
      times = 0;
      actualNode = head;
    }

    if (head.val === head.next?.val) {
      times += 1;
      head = head.next;
      continue;
    }

    if (head.val !== head.next?.val && times < 1) {
      node.next = new ListNode(head.val);
      node = node.next;
    }
    head = head.next;
  }

  return current.next;
};

const node = makeNodes([1, 1, 1, 2, 3]);

console.log(deleteDuplicated(node));
