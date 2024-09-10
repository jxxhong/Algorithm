function solution(n) {
    var answer = 0;
    n.toString().split('').map((a) => {
        answer += parseInt(a);
    });
    return answer;
}