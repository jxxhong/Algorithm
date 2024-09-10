function solution(rsp) {
    var answer = '';
    rsp.split('').map((a) => {
        if(a === '2') answer += '0';
        else if(a === '0') answer += '5';
        else if(a === '5') answer += '2';
    })
    return answer;
}