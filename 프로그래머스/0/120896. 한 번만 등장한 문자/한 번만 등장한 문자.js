function solution(s) {
    var answer = '';
    for(a of s){
        if(s.indexOf(a) === s.lastIndexOf(a))
            answer += a;
    }
    return answer.split('').sort().join('');
}