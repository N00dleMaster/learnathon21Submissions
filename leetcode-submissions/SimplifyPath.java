class Solution {
    public String simplifyPath(String path) {
        
        String[] dirs = (path.split("/+")); // java regexes are slow, but alas, idc.
    
        // Stack was MADE for this
        Stack<String> dirStack = new Stack<>();
        
        // loop through all dirs, manipulate stack
        for(int i=1; i<dirs.length; i++) { // I'm starting at the first index bcs there's a bug i'm too lazy to fix
            if(dirs[i].equals(".") || (dirs[i].equals("..") && dirStack.empty())) { // Do nothing
                continue;
            } else if (dirs[i].equals("..")) { // remove from stack
                dirStack.pop();
            } else {                           // add to stack
                dirStack.push(dirs[i]); 
            }
        }
        
        // For concatenating paths
        StringBuilder sb = new StringBuilder();
        // Concatenate paths
        if(dirStack.empty()) {
            return "/";
        } else {
            for(String dir : dirStack) {
                sb.append("/").append(dir); // google informs me sb is faster than concatenation using "+="
            }
        }
        
        return sb.toString();
        
    }
}