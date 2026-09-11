/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        if (!head || !head.next) return head
        const dummy = new ListNode(-1, head)
        let lp = dummy
        let rp = head
        for (let i = 0; i < left - 1; i++) lp = lp.next!
        for (let i = 1; i < right; i++) rp = rp.next!

        const tail = lp.next
        let toReversed = lp.next
        const remaining = rp.next
        rp.next = null

        let prev: ListNode | null = null
        while (toReversed) {
            const next = toReversed.next
            toReversed.next = prev
            prev = toReversed
            toReversed = next
        }
        tail.next = remaining
        lp.next = prev
        return dummy.next
    };


}
