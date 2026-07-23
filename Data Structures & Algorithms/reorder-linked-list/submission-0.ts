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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if(!head || !head.next) return 

        let slow = head;
        let fast = head;
        // We are doing this because , for even lists , we want the first middle element
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        // Split the list into two parts 
        let second = slow.next
        slow.next = null 
        let prev : ListNode | null = null
        // Reverse the second part of the linked list
        while(second) {
            const next = second.next
            second.next = prev
            prev = second
            second = next
        }
        second = prev
        let first = head
        // Now simply merge the list
        while(second){
            let firstNext = first.next
            let secondNext = second.next

            first.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }
    }
}
