class Solution {
    public String solution(String my_string, int[][] queries) {
        String answer = my_string;
        String newString = "";
        String s1 = "";
        String s2 = "";
        
        
        for(int[] query : queries) {
            newString = answer.substring(query[0], query[1] + 1);
            StringBuffer sb = new StringBuffer(newString);
            String reverseString = sb.reverse().toString();
            
            s1 = answer.substring(0, query[0]);
            s2 = answer.substring(query[1] + 1, my_string.length());
            answer = s1 + reverseString + s2;
        }
        
        return answer;
    }
}