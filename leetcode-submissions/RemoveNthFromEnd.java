/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        // Ok, so I googled this method, but if I place a pointer at the start, 
        // and another that is k+1 nodes away from the start, I can then
        // increment *both* pointers until the pointer at k+1 reaches the end.
        // At this time, the other pointer will be at the kth index from the *end*.
        // This is the most time-efficient way to find kth from end of linkedlist.
        ListNode p1 = head;
        ListNode p2 = head;
        
        if(head.next == null) {return null;}
        
        // place 2nd pointer at nth node
        for(int i=0; i<n; i++) {
            if(p2.next == null) { // In other words, if n = length of linked list,
                head = head.next; // we remove the head
                return head;
            }
            p2 = p2.next;
        }
            
        // Now increment both pointers to get to nth node from end
        while(p2.next != null) {
            p2 = p2.next;
            p1 = p1.next;
        }
        // This'll actually place us at the n+1th node from the end. This is gud.
        // We manipulate the node that is previous to nth from end, and remove it that way
        
        p1.next = p1.next.next;
        
        return head;
        
    }
}