
//   Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 || l2 || carry)
    {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        const digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next;

        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }

    return (dummy.next);
};