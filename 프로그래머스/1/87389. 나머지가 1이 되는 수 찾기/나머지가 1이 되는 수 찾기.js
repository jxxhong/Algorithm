function solution(n) {
    var answer = 1;
    
    while(true){
        if(n%answer===1) break;
        else answer++;
    }
    return answer;
}