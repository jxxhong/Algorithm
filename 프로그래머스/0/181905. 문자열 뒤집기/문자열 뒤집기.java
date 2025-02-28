class Solution {
    public String solution(String my_string, int s, int e) {
        String answer = "";
        String ms = my_string.substring(s, e + 1);
        StringBuffer sb = new StringBuffer(ms);
        String newString = sb.reverse().toString();
        
        return my_string.replace(ms, newString);
    }
}