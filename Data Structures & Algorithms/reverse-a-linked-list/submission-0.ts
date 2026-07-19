

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev: ListNode | null = null
        let curr = head
        while (curr !== null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
}
