function solution(price, money, count) {
    var answer = 0;

    let result = 0;
    let i = 1;
    
    while(i<=count)
        result += price * i++;
    
    if(money<result) answer = result - money;
    
    return answer;
}