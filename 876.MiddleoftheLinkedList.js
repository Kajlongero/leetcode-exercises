const { ListNode, makeNodes } = require("./utils/LinkedList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleOfList = (head) => {
  let counter = 0;
  let dummy = head;

  while (dummy) {
    dummy = dummy.next;
    counter++;
  }

  const num = counter % 2 === 0 ? counter / 2 + 1 : Math.round(counter / 2);

  for (let i = 1; i < num; i++) {
    head = head.next;
  }

  return head;
};

console.log(middleOfList(makeNodes([1, 2, 3, 4, 5, 6])));
