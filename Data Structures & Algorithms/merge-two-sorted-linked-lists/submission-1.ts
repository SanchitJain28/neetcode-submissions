class ListNode_ {
    val: number;
    next: ListNode_ | null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class Solution {
    mergeTwoLists(list1: ListNode_ | null, list2: ListNode_ | null): ListNode_ {
        let dummy = new ListNode_(-1);
        let tail = dummy;
        let t1 = list1;
        let t2 = list2;
        while (t1 !== null && t2 !== null) {
            if (t1.val <= t2.val) {
                tail.next = t1;
                t1 = t1.next;
            } else {
                tail.next = t2;
                t2 = t2.next;
            }
            tail = tail.next;
        }

        if (t1 !== null) tail.next = t1;
        else tail.next = t2;
        return dummy.next;
    }
}
