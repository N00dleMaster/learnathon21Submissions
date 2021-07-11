class Solution {
    public int findDuplicate(int[] nums) {
        
        HashSet<Integer> pastNums = new HashSet();
        
        for(int num : nums) {
            if(pastNums.contains(num)) {
                return num;
            }
            pastNums.add(num);
        }
        
        return -1;
        
    }
}