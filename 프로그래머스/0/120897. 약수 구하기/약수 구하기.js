function solution(n) {
    var answer = [];
    for(let i = 0; i < n; i++){
        if(n % (i + 1) === 0) answer.push(i + 1);
    }
    return answer;
}