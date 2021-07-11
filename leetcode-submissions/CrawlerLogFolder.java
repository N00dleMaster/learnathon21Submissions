class Solution {
    public int minOperations(String[] logs) {
        
        // This challenge is almost a copy of the simplify-path one
        
        // I don't even need to use a stack, bcs we don't actually care about the exact dirs
        int minOps = 0;
        
        for(String log: logs) {
            if(log.equals("./") || (log.equals("../") && minOps==0)) {
                continue;
            } else if (log.equals("../")) {
                minOps--;
            } else {
                minOps++;
            }
        }
        
        return minOps;
        
    }
}