class Solution {
    public void moveZeroes(int[] nums) {
        
        // The first "available" index is the first index that has a zero in it (we want to replace zeroes)
        int firstAvailableIndex = 0;
        
        for(int i=0; i<nums.length; i++) {
            if(firstAvailableIndex == i && nums[i] != 0) {
                firstAvailableIndex++;
                continue;
            } else if(nums[i] != 0) {
                nums[firstAvailableIndex] = nums[i];
                nums[i] = 0; // We don't need a temp var, since all the nums are zero
                firstAvailableIndex++;
            }
        }
        
    }
}