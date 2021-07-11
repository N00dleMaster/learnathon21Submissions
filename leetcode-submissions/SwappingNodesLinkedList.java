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
    public ListNode swapNodes(ListNode head, int k) {
        
        if(head.next == null) {return head;}
        
        // Ok, so I googled this method, but if I place a pointer at the start, 
        // and another that is k+1 nodes away from the start, I can then
        // increment *both* pointers until the pointer at k+1 reaches the end.
        // At this time, the other pointer will be at the kth index from the *end*.
        // This is the most time-efficient way to find kth from end of linkedlist.
        // (I also used this technique in a previous problem)
        
        ListNode start = head;        // this'll be the one that is kth from the start
        ListNode end = head;          // this'll be the one that is kth from the *end*
        
        ListNode temp = head;         // used to store temp. stuff
        
        // get the "temp" node to k+1 index (and simultaeneously get start to kth index)
        for(int i=1; i<=k-1; i++) {
            temp = temp.next;
        }
        start = temp; // at this point temp will be at start index
        
        // Increment temp and "end" until temp reaches end. "end" will now be kth from the end
        while(temp.next != null) {
            temp = temp.next;
            end = end.next;
        }
        
        // I initially had a solution that manipulated the previous nodes and all that,
        // but if you read the question carefully, it says "...swapping the *values* of the
        // kth node from the beginning and end" -- the VALUES, not references. Big brain time.
        int temp2 = start.val;
        start.val = end.val;
        end.val = temp2;
        
        return head;
        
    }
}