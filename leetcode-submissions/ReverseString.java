class Solution {
    public void reverseString(char[] s) {
        
        char temp;
        
        int startPointer = 0, endPointer = s.length-1;
        
        while(startPointer < endPointer) {
            temp = s[endPointer];
            s[endPointer] = s[startPointer];
            s[startPointer] = temp;
            endPointer--;
            startPointer++;
        }
        
    }
}