function solution(num) {
    var answer = 0;
    while(answer < 500){
        if(num % 2 === 0) num = num / 2;
        else if(num % 2 === 1 && num !== 1) num = num * 3 + 1;
        else if(num === 1) break;
        answer++;
    }
    
    if(answer === 500) return -1;
    else return answer;
}