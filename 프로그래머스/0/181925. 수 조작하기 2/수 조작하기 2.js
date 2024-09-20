function solution(numLog) {
    var answer = '';
    let before = numLog[0];
    
    for(let i = 1; i < numLog.length; i++){
        switch(numLog[i] - before){
            case 1 : answer += 'w'; break;
            case -1 : answer += 's'; break;
            case 10 : answer += 'd'; break;
            case -10 : answer += 'a'; break;
        }
        before = numLog[i];
    }
    return answer;
}