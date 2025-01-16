function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map((a, i) => {
        let b = parseInt(a.split('').slice(s, s + l).join(''));
        if(b > k) answer.push(b);
    })
    return answer;
}