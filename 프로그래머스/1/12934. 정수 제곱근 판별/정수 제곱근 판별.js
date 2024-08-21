function solution(n) {
    var answer = -1;
    n **= 1/2;
    if(Number.isInteger(n)) answer = (n+1)**2;
    return answer;
}