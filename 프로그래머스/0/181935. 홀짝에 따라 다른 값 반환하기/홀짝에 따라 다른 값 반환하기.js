function solution(n) {
    let answer = 0;
    
    if(n % 2 === 1){
        for(let i = 1; i < n + 1; i++){
            if(i % 2 === 1) answer += i;
        }
    }else{
        for(let i = 1; i < n + 1; i++){
            if(i % 2 === 0) answer += Math.pow(i, 2);
        }
    }
    
    return answer;
}