function solution(order) {
    var answer = 0;
    order.toString().split('').filter((a)=> {
        if(a % 3 === 0 && a != 0) answer++;
    })
    return answer;
}