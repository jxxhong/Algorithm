function solution(order) {
    var answer = 0;
    order.map(a => {
        if(a.includes('americano') || a === 'anything')
            answer += 4500;
        else answer += 5000;
    })
    return answer;
}