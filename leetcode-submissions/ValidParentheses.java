class Solution {
    // This seems like a job for stacks!
    public boolean isValid(String s) {
        
        Stack<Character> parentheses = new Stack<>();

        for(char ch : s.toCharArray()) {
            // We'll push the closing counterpart if we find an opening paren.
            switch (ch) {
                case '(' :
                    parentheses.push(')');
                    break;
                case '[' :
                    parentheses.push(']');
                    break;
                case '{' :
                    parentheses.push('}');
                    break;
                default:
                    if(!parentheses.empty() && parentheses.peek() == ch) {parentheses.pop();}
                    else {return false;} // bcs we cannot have a closing paren. without an opening one
            }
        }
        
        return parentheses.empty();
        
    }
}