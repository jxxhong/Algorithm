function solution(x) {
    var answer = true;
    
    let sum = 0;
    let y = x;
    
    while(x > 0){
        sum += x % 10;
        x = parseInt(x / 10);
    }

    if(y % sum !== 0) answer = !answer;
    
    return answer;
}