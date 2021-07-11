class Solution {
    
    // We'll mark the beginning and ending index of the string, and track those.
    int beginIndex = 0;
    int endIndex; // This one is init.ed inside func.
    
    public int minimumLength(String s) {
        
        endIndex = s.length() -1;
        
        // I was initially using an ArrayDeque, but decidied to switch to good old ints. 
        // The time complexity of the Deque solution was 7th percentile.
        // I'm still using the same principle, but no accompanying data structure.
        // Update: It's now 9th percentile. All that refactoring for nothing. :pain:
        
        while(endIndex-beginIndex > 0) { // If lengh equals 1, we can't delete anything (indices aren't allowed to overlap)
            if(s.charAt(beginIndex) == s.charAt(endIndex)) {
                deleteSimilarStart(s, s.charAt(beginIndex));
                if(endIndex-beginIndex >= 0) {
                    deleteSimilarEnd(s, s.charAt(endIndex));
                }
            } else {
                return endIndex-beginIndex+1;
            }
        }
        

        return endIndex-beginIndex+1;
    }
    
    
    // yay for recursion
    public void deleteSimilarStart(String s, char characterToCheck) {
        if(beginIndex>endIndex){return;}
        beginIndex++;
        if(endIndex-beginIndex+1 > 0) {
            if(s.charAt(beginIndex) == characterToCheck) { // the recursive part
                deleteSimilarStart(s, characterToCheck);
            }
        }
    }
    
    public void deleteSimilarEnd(String s, char characterToCheck) {
        endIndex--;
        if(endIndex-beginIndex+1 >= 0) {
            if(s.charAt(endIndex) == characterToCheck) { // the recursive part
                deleteSimilarEnd(s, characterToCheck);
            }
        }
    }
    
}






