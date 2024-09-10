function solution(my_string) {
    var answer = 0;
    my_string.split('').map((a) => {
        if(Number.isInteger(parseInt(a))) answer += parseInt(a);
    })
    return answer;
}