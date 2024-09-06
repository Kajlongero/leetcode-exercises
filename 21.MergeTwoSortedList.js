function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const MergeTwoSortedLists = (list1, list2) => {
  let node = new ListNode(0);
  let current = node;

  while (list1 || list2) {
    if (!list1 && list2) {
      node.next = new ListNode(list2.val);
      node = node.next;
      list2 = list2.next;
      continue;
    } else if (list1 && !list2) {
      node.next = new ListNode(list1.val);
      node = node.next;
      list1 = list1.next;
      continue;
    }

    if (list1?.val > list2?.val) {
      node.next = new ListNode(list2?.val);
      node = node.next;
      list2 = list2?.next;
      continue;
    } else if (list1?.val < list2?.val) {
      node.next = new ListNode(list1?.val);
      node = node.next;
      list1 = list1?.next;
      continue;
    } else {
      node.next = new ListNode(list2?.val);
      node = node.next;
      list2 = list2?.next;
      continue;
    }
  }

  return current.next;
};

const n1 = new ListNode(0, new ListNode(1, new ListNode(2)));
const n2 = new ListNode(0, new ListNode(4, new ListNode(5)));

console.log(MergeTwoSortedLists(n1, n2));
