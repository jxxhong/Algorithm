class Solution {
    public String solution(int n) {
        String answer = "";
        if(n%2==0) {
            n = n/2;
            for(int i = 0; i<n; i++){
                answer = answer.concat("수박");
            }
        }
        else{
            n = n/2;
            for(int i = 0; i<n; i++){
                answer = answer.concat("수박");
            }
            answer = answer.concat("수");
        }
        return answer;
    }
}