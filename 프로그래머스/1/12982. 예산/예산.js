function solution(d, budget) {
    var answer = 0;
    let i = 0;
    d.sort((a, b) => a - b);
    
    while(budget > 0) {
        budget -= d[i];
        if(budget < 0 || !(d[i])) break;
        answer++;
        i++;
    }
    
    return answer;
}