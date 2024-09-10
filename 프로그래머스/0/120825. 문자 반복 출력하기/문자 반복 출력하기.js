function solution(my_string, n) {
    var answer = '';
    my_string.split('').map((a)=>{
        answer += a.repeat(n);
    })
    return answer;
}