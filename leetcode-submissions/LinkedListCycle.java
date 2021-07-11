/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        
        if(head == null || head.next == null) {return false;}
        
        ListNode currentNode = head;
        HashSet<ListNode> pastNodes = new HashSet();
        
        while(currentNode.next != null) {
            if(pastNodes.contains(currentNode.next)) {return true;}
            pastNodes.add(currentNode);
            currentNode = currentNode.next;
        }
        
        return false;
        
    }
}