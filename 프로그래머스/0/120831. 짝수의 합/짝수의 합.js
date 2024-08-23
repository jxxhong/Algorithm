function solution(n) {
    var answer = 0;
    for(let i = 2; i<n+1;){
        answer += i;
        i = i + 2;
    }
    return answer;
}