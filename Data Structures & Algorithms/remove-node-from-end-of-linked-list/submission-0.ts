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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const nodes : ListNode[] = []
        let current = head
        while(current){
            nodes.push(current)
            current = current.next
        }
        let removedIndex = nodes.length - n 
        if(!removedIndex) return head!.next
        const prev = nodes[removedIndex -1]
        prev.next = nodes[removedIndex].next
        return head
    }
}
