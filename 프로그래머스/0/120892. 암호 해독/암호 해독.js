function solution(cipher, code) {
    var answer = '';
    cipher.split('').map((a,i) => {
        if((i + 1 )% code ===0)
            answer += a
    });
    return answer;
}