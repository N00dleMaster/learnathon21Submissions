class Solution {
    
    public List<List<Integer>> threeSum(int[] nums) {
        
        List<List<Integer>> triplets = new ArrayList(); // what we'll return
        Set<List<Integer>> checkDup = new HashSet();    // used to check for duplicates due to O(1) lookup time
        
        // i is first num, j is second, and k is third
        Arrays.sort(nums); // I hear java uses a dual-pivot quicksort under the covers here, so it's pretty fast
        // One thing I noticed is that the runtime on this solution varies drastically, and that's apparently
        // because quicksort decides the pivots randomly -- so varying efficiencies result each time.
        
        for(int i=0; i<nums.length-2; i++) {
            int j = i+1;
            int k = nums.length-1;
            while(j<k) {
                if(nums[i] + nums[j] + nums[k] > 0) {         // if sum is too much
                    k--; // this effectively makes the sum smaller, since array is sorted
                } else if (nums[i] + nums[j] + nums[k] < 0) { // if sum is too little
                    j++; // this effectively makes the sum bigger
                } else {
                    List<Integer> triplet = new ArrayList();
                    triplet.add(nums[i]);
                    triplet.add(nums[j]);
                    triplet.add(nums[k]);
                    if(!checkDup.contains(triplet)) {
                        triplets.add(triplet); // bcs no duplicates allowed
                        checkDup.add(triplet);
                    }
                    j++;
                    k--;
                }
            }
        }
        
        return triplets;
        
        
    }
    
    
    
}