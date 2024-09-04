function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const AddTwoNumbers = (l1, l2) => {
  let node = new ListNode();
  let current = node;
  let dummy = 0;

  while (l1 || l2) {
    let sum = 0;

    let val1 = l1?.val;
    let val2 = l2?.val;

    if (l1) {
      sum += val1;
      l1 = l1.next;
    }

    if (dummy > 0) {
      sum += dummy;
      dummy--;
    }

    if (l2) {
      sum += val2;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum -= 10;
      dummy++;
    }

    node.next = new ListNode(sum);
    node = node.next;

    if (!l1 && !l2 && dummy > 0) {
      node.next = new ListNode(dummy);
      node = node.next;
    }
  }

  return current.next;
};

const node1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const node2 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9)))
);

console.log(AddTwoNumbers(node1, node2));
