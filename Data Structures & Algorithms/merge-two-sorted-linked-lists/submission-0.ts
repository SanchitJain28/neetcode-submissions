

class ListNode_ {
    val : number;
    next : ListNode_ | null
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class Solution {
    mergeTwoLists(list1: ListNode_ | null, list2: ListNode_ | null): ListNode_ {
        let array : number[] = []
        let current = list1 
        while(current !==null){
            array.push(current.val)
            current = current.next
        }
        current = list2
        while(current!==null){
            array.push(current.val)
            current= current.next
        }
        //Sort the array 
        array.sort((a,b)=>a-b)
        return this.convertArrayToLinkedList(array)
    }

    convertArrayToLinkedList(arr: number[]) {
        if (arr.length === 0) return null
        let head = new ListNode_(arr[0])
        let current = head 
        for(let i =1 ; i<arr.length;i++){
            current.next = new ListNode_(arr[i])
            current = current.next
        }
        return head
    }
}
