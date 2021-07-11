class Solution {
    public int shortestSubarray(int[] nums, int k) {
        
        // I couldn't solve this one. I tried searching online, but I didn't actuallly *understand* 
        // any of the other solutions I saw. The following code *does* work, but it's not fast enough.
        // It times out. I've tried the testcases in my IDE, and this solution *is* correct. But not fast enough.
        
        for(int num : nums) { // get the array with subarray size one out of the way
            if(num>=k) {return 1;}
        }
        
        // I've done a problem like this in a club and this is the "sliding window" approach
        // This was originally done with a queue, but over here, using an int was far more efficient
        int currentSum = 0;
        for(int i=2; i<=nums.length; i++) {
            currentSum = 0;
            // initialize the sum with the first "i" elements in the array
            for(int j=0; j<i; j++) {
                currentSum += nums[j];
            }
            // Check if greater
            if(currentSum >= k)
                    return i;
            // Loop through rest of elements
            for(int j=i; j<nums.length; j++) {
                // In each iteration, we add the "rightmost" element, and remove the "leftmost"
                // where right is the end of the array, and left is the beginning.
                currentSum += nums[j];
                currentSum -= nums[j-i];
                if(currentSum >= k)
                    return i;
            }
        }
        
        return -1;
        
        
    }
}